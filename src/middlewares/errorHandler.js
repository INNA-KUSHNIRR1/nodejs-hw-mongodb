import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }
  res.json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
