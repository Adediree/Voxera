export const RouteConstant = {
    auth: {
        login: {
            name: "",
            path: "/auth/login",
        },
        register: {
            name: "",
            path: "/auth/register",
        },
        getStarted: {
            path: '/auth/get-started',
            name: 'Get Started Screen',
            moduleName: 'authentication'
        },
    },
    dashboard: {
        getStarted: {
            name: "",
            path: "/",
        },
        createDummy: {
            path: '/dashboard/create-dummy',
            name: 'Dashboard Create Dummy Screen',
            moduleName: 'Dummy'
        },
        allDummies: {
            path: '/dashboard/all-dummies',
            name: 'All Dummies',
            moduleName: 'Dummy'
        },
    },
}
