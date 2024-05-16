const notFound=(req,res,next)=>{
    const error=new Error(`Not found -${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler=(err,req,res,next)=>{
  let statusCode=res.statusCode ===200?500:res.statusCode;
  let message=err.message;
  //Check for mongoode bad objectId;
  if(err.name==='CastError'){
    message='Resource not found.';
    statusCode=404;
  }

  res.status(statusCode).json({
    message,
    stack:process.env.NODE_ENV==='production'?'pancake':err.stack
  })
}

export {notFound,errorHandler};