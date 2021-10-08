export const notFoundMiddleware = (
  err: { status: number; message: any },
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: {
        (arg0: { successful: boolean; message: any }): void;
        new (): any;
      };
    };
  },
  next: (arg0: any) => void
) => {
  if (err.status === 404) {
    res.status(404).send({ successful: false, message: err.message });
  } else {
    next(err);
  }
};

export const badRequestMiddleware = (
  err: { status: number; errorsList: any },
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: any): void; new (): any };
    };
  },
  next: (arg0: any) => void
) => {
  if (err.status === 400) {
    res.status(400).send(err.errorsList);
  } else {
    next(err);
  }
};

export const unAuthorizedHandler = (
  err: { status: number; message: any },
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: any): void; new (): any };
    };
  },
  next: (arg0: any) => void
) => {
  if (err.status === 401) {
    res.status(401).send(err.message || 'You are not logged in!');
  } else {
    next(err);
  }
};

export const forbiddenHandler = (
  err: { status: number; message: any },
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: any): void; new (): any };
    };
  },
  next: (arg0: any) => void
) => {
  if (err.status === 403) {
    res.status(403).send(err.message || 'You are not allowed to do that!');
  } else {
    next(err);
  }
};

export const catchErrorMiddleware = (
  err: any,
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: string): void; new (): any };
    };
  },
  next: any
) => {
  res.status(500).send('Generic Server Error');
};
