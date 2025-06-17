export const setNestedValue = (obj: any, path: any, value: any) => {
    const keys = path.split('.');
    let temp = obj;

    keys.forEach((key: any, index: any) => {
      if (index === keys.length - 1) {
        temp[key] = value;
      } else {
        if (!temp[key]) temp[key] = {};
        temp = temp[key];
      }
    });

    return obj;
  }