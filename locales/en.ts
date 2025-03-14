export default {
    'hello': 'Hello',
    'dashboard': {
        'title' : 'Dashboard',
        'sections': {
            'account': {
                'title': 'Account'
            },
            'personal_info': {
                'title': 'Personal Info',
                'first_name': 'First Name',
                'last_name': 'Last Name',
                'email': 'Email',
                'phone': 'Phone'
            }
        }
    },
    'home' : {
        'button-get-started': 'Get started',
        'button-learn-more': 'Learn more',
    },
    'signup' : {
        'title' : 'Sign Up',
        'email' : {
            'placeholder' : 'example@mail',
            'label' : 'Email'
        },
        'password' : {
            'placeholder' : 'password',
            'label' : 'Password'
        },
        'button' : 'Sign Up',
        'button-loading' : 'Signing up',
        'google' : 'Sign Up with Google'
    },
    'layout' : {
        'links' : {
            'home': 'home',
            'signup': 'sign up',
            'login': 'log in',
            'dashboard': 'dashboard',
            'logout': 'logout'
        },
        'locale' : {
            'loading': 'Changing locale...'
        },
        'footer' : {
            'copyright' : "All rights reserved.",
            'created_by' : "Created by"
        }
    }
} as const