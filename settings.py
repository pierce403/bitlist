##
# Site Name/URL and Email Suffix
# These are used in a few places to construct strings required for the emails
# email_suffix is used as the final piece of the contact_email when a post is created
# site_url is used to construct URLs in the email text.
##
site_url = 'bitcoinlist.appspot.com'
email_suffix = 'bitcoinlist.appspotmail.com'

# If changed here, the name should also be changed in: 
# Site title in nav bar: nav.html   - <a class="brand">Bitcoin List</a>
# Site title in browser: base.html  - <title>Bitcoin List</title>
site_name = "Bitcoin List"

##
# OpenID Providers
# This list allows you to enable or disable OpenID providers at will, by commenting or uncomenting the code
# More options are available at https://developers.google.com/appengine/articles/openid but these are the majors.
##

providers = {
    'Google'   : 'https://www.google.com/accounts/o8/id',
    'Yahoo'    : 'yahoo.com',
    #'MySpace'  : 'myspace.com',
    #'AOL'      : 'aol.com',
    #'MyOpenID' : 'myopenid.com'
}

##
# Post Categories and Subcategories
# These are not associated in any way, each post has one of each.
##

categories = [  { "name" : "Looking to Work"  , "ID" : "employee" },
                { "name" : "Looking to Hire"  , "ID" : "employer" },
                { "name" : "Looking to Buy"   , "ID" : "buyer"    },
                { "name" : "Looking to Sell"  , "ID" : "seller"   },
                ]
# don't forget to update the main page if you change any of these categories
subcategories =[{ "name" : "Web Design"            , "ID" : "webdesign" },
                { "name" : "Web Programming"       , "ID" : "webdev"    },
                { "name" : "Graphic Design"        , "ID" : "graphics"  },
                { "name" : "Hardware Design"       , "ID" : "hardware"  },
                { "name" : "Security"              , "ID" : "security"  },
                { "name" : "Information Design"    , "ID" : "infodesign"},
                { "name" : "Game Development"      , "ID" : "gamedev"   },
                ]

## This is the number of postes per category that are returned on the main page.
main_fetch = 10



##
# Status Messages
# General messages for reporting errors and whatnot to the user.
##
email_sent = "Your message has been successfully sent."
email_not_sent = "Your message had errors and was not sent.  Please enter a valid email address."