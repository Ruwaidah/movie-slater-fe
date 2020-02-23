import React, { useState } from 'react'
import { connect } from 'react-redux'
import './profileStyle.scss'
import Close from '../images/closeButton.png'
import noImage from '../images/no-image.gif'
import setting from '../images/setting.svg'
import { getUserById, updateUser, updateUserData } from '../../actions/index.js'
import { useEffect } from 'react'
import Loading from '../Loading.js'


function Profile(props) {
    console.log(localStorage.getItem("image"))
    let image;
    let para;
    const [img, setImage] = useState();
    const [preview, setPreview] = useState();
    const [viewImage, setViewIamge] = useState(false)

    if (localStorage.getItem("googleId") && props.userData.image)
        para = "Use Google Image"
    useEffect(() => {
        props.getUserById()
    }, [])


    // Show Big Profile Image
    const changeImage = () =>
        setViewIamge(true)

    // Exist from Profile Page
    const exit = () => {
        props.history.goBack(2)
    }

    // Preview the Image To Upload
    const onImageChange = event => {
        let file = event.target.files[0];
        setImage(file);
        let reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setPreview(reader.result)
        }.bind(reader)
    }

    // Cancel The Image Upload
    const cancelIamge = () => {
        setViewIamge(false)
        setPreview("")
    }

    // To Delete the Image after Upload and Use Google Image instead
    const updateUserData = () => {
        props.updateUserData({ image: null })
        setViewIamge(false)
    }

    // Update User image
    const saveImage = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        if (img) formdata.append("image", img, img.name);
        else
            return setViewIamge(false);
        props.updateUser(formdata);
        setViewIamge(false);
        setPreview("")
    }

    // Check wich image to show
    if (props.userData.image)
        image = props.userData.image
    else if (localStorage.getItem("image"))
        image = localStorage.getItem("image");
    else image = noImage


    if (props.fetchingData || !props.userData) return <Loading />
    return (
        <div className="profile-container" >

            {/* Nav-Bar */}
            <div className="profile-nav" onClick={() => viewImage ? setViewIamge(false) : null}>
                <h3>Profile</h3>
                <div>
                    <img src={Close} onClick={() => exit()} />
                </div>
            </div>
            {viewImage ? <div className="showImage"><img src={preview ? preview : image} />
                <form onSubmit={saveImage}>
                    <input type="file" className="custom-file-input" onChange={onImageChange} accept="application/msword,image/gif,image/jpeg,application/pdf,image/png,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/zip,.doc,.gif,.jpeg,.jpg,.pdf,.png,.xls,.xlsx,.zip" />
                    <button type="submit">Save</button>
                    <button onClick={() => cancelIamge()}>Cancel</button>
                </form>{para ? <p onClick={() => updateUserData()}> Use Google Image</p> : null}
            </div> : null}

            {/* Header */}
            <div className="header" onClick={() => viewImage ? setViewIamge(false) : null}>
                <div className="profile-image">
                    <img src={image} onClick={() => changeImage()} />
                </div>
                <div className="name-setting">
                    <h3>{props.userData.username ? props.userData.username : props.userData.name}</h3>
                    <div className="setting">
                        <img src={setting} />
                        <p>Edit Setting</p>
                    </div>
                </div>
            </div>

        </div>
    )

}


const mapStateToProps = state => {
    return {
        movieList: state.movieList,
        fetchingData: state.fetchingData,
        userData: state.userData
    };
};
export default connect(mapStateToProps, { getUserById, updateUser, updateUserData })(Profile);

