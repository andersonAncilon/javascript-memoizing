class Memoizing {
  constructor() {
    if (!Memoizing.instance) {
      this.cache = {};
      Memoizing.instance = this;
    }

    return Memoizing.instance;
  }

  memoize(fn, params) {
    const atributeName = `${fn}/${params}`;
    if (atributeName in this.cache) {
      console.log("Buscando dados do cache...");
      return this.cache[atributeName].result;
    } else {
      const result = fn(params);
      console.log("Executando método pela primeira vez...");
      this.cache[atributeName] = { fn, params, result };
      return result;
    }
  }
}

const instance = new Memoizing();

export default instance;
