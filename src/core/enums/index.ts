export enum BUTTON_TYPES {
     BUTTON = "button",
     SUBMIT = "submit",
     RESET = "reset",
}

export enum ROUTES {
     HOME = "/",
     ABOUT = "/about",
     PROGRAMS = "/programs",
     EVENTS = "/events",
     CONTACT = "/contact",
     BLOGS = "/blogs",
     DONATION = "/donation",
     TERMS_CONDITION = "/terms-and-conditions",
     REFUND_POLICY = "/refund-policy",
     DONATION_STATUS = "/donation/status/:merchantTransactionId",
     PAYMENT_SUCCESS = "/payment/success",
     PAYMENT_FAILURE = "/payment/failure",
}

export enum API_ROUTES {
     CONTACT = "/contact",
     ALL_EVENTS = "/events/all",
     EVENTS = "/events",
     CATEGORY = "/category/all",
     PROGRAM = "/program/all",
     NEW_USER_CONTACT = "/user/new",
     NGO_PROFILE = "/ngo",
     DONATIONS = "/donation/pay",
     GALLERY = "/gallery",
     CHECK_STATUS = "/donation/check-status",
}

export enum API_METHODS {
     GET = "GET",
     POST = "POST",
     PUT = "PUT",
     DELETE = "DELETE",
}
