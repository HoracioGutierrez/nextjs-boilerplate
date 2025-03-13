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
    'layout' : {
        'links' : {
            'home': 'home',
            'signup': 'sign Up',
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