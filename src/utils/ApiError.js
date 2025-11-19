class ApiError extends Error{

    constructor(statusCode,
        message='Something went wrong',
        err=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=err

        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }


}

export {ApiError}