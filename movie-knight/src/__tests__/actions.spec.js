import moxios from 'moxios'
import { testStore } from './../UtilsTest/index.js'
import {
    login, signUp, getUpcomingMovies, signUpGoogle,
    getUserById,
    updateUser,
    updateUserData,
    getMovieDetail,
    toggleNext,
    toggleNextOff,
    movieNext,
    dayNext,
    ticketsNum,
    seatsArea, timeSelectAction,
    getShowTimesRsults
} from '../actions/index.js'
import axiosWithAuth from "../utils/axiosWithAuth";



// ******************************** Login
describe('login', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('login sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            },
            token: "ewjfpojwpfwfw"
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(login())
            .then(() => {
                const newState = store.getState();
                expect(newState.userData).toBe(expectedState.user)
            })
    })
})

// ******************************** SignUp
describe('signUp', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('signUp sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            },
            token: "ewjfpojwpfwfw"
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(signUp())
            .then(() => {
                const newState = store.getState();
                expect(newState.userData).toBe(expectedState.user)
            })
    })
})



// ******************************************** Google Login/Signup
// describe('Google Login /SignUp', () => {
//     beforeEach(() => {
//         moxios.install();
//     });
//     afterEach(() => {
//         moxios.uninstall();
//     })
//     test('signUpGoogle sucsse', () => {
//         const expectedState = {
//             user: {
//                 id: 12,
//                 googleId: 32,
//                 username: "ruwaihda"
//             },
//             token: "ewjfpojwpfwfw"
//         }
//         const store = testStore();
//         moxios.wait(() => {
//             const request = moxios.requests.mostRecent();
//             request.respondWith({
//                 status: 200,
//                 response: expectedState
//             })
//         })
//         return store.dispatch(signUpGoogle())
//             .then(() => {
//                 const newState = store.getState();
//                 console.log(newState)
//                 expect(newState.userData).toBe(expectedState.user)
//             })
//     })
// })



describe('get user by id', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('get user by id', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            }
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(getUserById())
            .then(() => {
                const newState = store.getState();
                expect(newState.userInfo).toBe(expectedState.user)
            })
    })
})




// UpDate user

describe('updateUser', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('updateUser sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            }
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(updateUser())
            .then(() => {
                const newState = store.getState();
                expect(newState.userInfo).toBe(expectedState)
            })
    })
})



// 

describe('updateUser', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('updateUser sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            }
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(updateUserData())
            .then(() => {
                const newState = store.getState();
                expect(newState.userInfo).toBe(expectedState.user)
            })
    })
})




// MOVIES DETAILS
describe('getMovieDetail', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('getMovieDetail sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            }
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(getMovieDetail())
            .then(() => {
                const newState = store.getState();
                expect(newState.movieDetails).toBe(expectedState)
            })
    })
})




// UPCOMING MOVIES
describe('getUpcomingMovies', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('getUpcomingMovies sucsse', () => {
        const expectedState = {
            user: {
                id: 12,
                username: "ruwaihda"
            }
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(getUpcomingMovies())
            .then(() => {
                const newState = store.getState();
                expect(newState.upcomingMovies).toBe(expectedState)
            })
    })
})

// TOGGLE_NEXT_BUTTON
describe('toggleNext', () => {
    test('toggleNext sucsse', () => {
        const store = testStore();
        store.dispatch(toggleNext())
        const newState = store.getState();
        expect(newState.NextButton).toBe(true)
    })
})

// TOGGLE_NEXT_OFF
describe('toggleNext', () => {
    test('toggleNext sucsse', () => {
        const store = testStore();
        store.dispatch(toggleNextOff())
        const newState = store.getState();
        expect(newState.NextButton).toBe(false)
    })
})

// MOVIE_NEXT_BUTTON
describe('MOVIE_NEXT_BUTTON', () => {
    test('MOVIE_NEXT_BUTTON sucsse', () => {
        const store = testStore();
        store.dispatch(movieNext("movies"))
        const newState = store.getState();
        expect(newState.MovieSelects).toBe("movies")
    })
})


// DAY_NEXT_BUTTON
describe('DAY_NEXT_BUTTON', () => {
    test('DAY_NEXT_BUTTON sucsse', () => {
        const store = testStore();
        store.dispatch(dayNext("days"))
        const newState = store.getState();
        expect(newState.daySelects).toBe("days")
    })
})

// TICKETS_NEXT_BUTTON
describe('TICKETS_NEXT_BUTTON', () => {
    test('TICKETS_NEXT_BUTTON sucsse', () => {
        const store = testStore();
        store.dispatch(ticketsNum("tickets"))
        const newState = store.getState();
        expect(newState.ticketsNumber).toBe("tickets")
    })
})


// SEATS_NEXT_BUTTON
describe('SEATS_NEXT_BUTTON', () => {
    test('SEATS_NEXT_BUTTON sucsse', () => {
        const store = testStore();
        store.dispatch(seatsArea("seats"))
        const newState = store.getState();
        expect(newState.seatsSelects).toBe("seats")
    })
})

// TIME_NEXT_BUTTON
describe('TIME_NEXT_BUTTON', () => {
    test('TIME_NEXT_BUTTON sucsse', () => {
        const store = testStore();
        store.dispatch(timeSelectAction("time"))
        const newState = store.getState();
        expect(newState.timeSelects).toBe("time")
    })
})

// GET_SHOWTIMES_RESULTS_SUCCESS
describe('GET_SHOWTIMES_RESULTS_SUCCESS', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    test('GET_SHOWTIMES_RESULTS_SUCCESS sucsse', () => {
        const expectedState1 = [
            [{
                id: 12,
                username: "ruwaihda"
            }],
            [{
                id: 12,
                username: "ruwaihda"
            }
            ]

        ]

        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState1
            })
        })
        return store.dispatch(getShowTimesRsults(["oiuguo"]))
            .then(() => {
                const newState = store.getState();
                console.log(newState)
                expect(newState.theatres).toBe(expectedState1[0])
            })
    })
})