export const modifyEmptyInfo = (req, res, next) => {
    if (req.body.info == '') {
        req.body.info = 'No info available';
    }
    if (req.body.quantity < 0) {
        req.body.quantity = 0;
    }
    next();
  };