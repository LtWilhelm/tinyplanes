export class IDBHelper {
  // private collection: string;

  idbRequest: IDBOpenDBRequest;
  idbInstance: IDBDatabase;
  stores: Map<string, IDBObjectStore> = new Map();
  currentTransaction: IDBTransaction;

  constructor(collection: string, stores: string[]) {
    // this.collection = collection;

    this.idbRequest = window.indexedDB.open(collection, 1);
    this.idbRequest.onupgradeneeded = (event) => {
      const db = (event.target as any).result;

      for (const store of stores) {
        var objectStore = db.createObjectStore(store, { keyPath: 'uuid' })
        console.log(store);
        this.stores.set(store, objectStore);
      }
    }
    this.idbRequest.onsuccess = (event) => {
      this.idbInstance = (event.target as any).result;
    }
  }

  store: IDBObjectStore;

  newTransaction = (storeName: string) => {
    const transaction = this.idbInstance.transaction(storeName, "readwrite")
    this.store = transaction.objectStore(storeName);
  }


  find = (storeName: string, id: string) =>
    new Promise((resolve, reject) => {
      this.newTransaction(storeName)
      const req = this.store.get(id);

      req.onerror = () => reject('Error occured while finding object in current store');

      req.onsuccess = () => {
        resolve(req.result)
      }
    })

  add = (storeName: string, data: any & {uuid: string}) =>
    new Promise((resolve, reject) => {
      this.newTransaction(storeName)
      if (Array.isArray(data)) {
        for (const item of data) {
          const req = this.store.add(item);

          req.onerror = () => reject('Error occured while adding object in current store');

          req.onsuccess = () => {
            resolve(req.result)
          }
        }
      }
      else {
        const req = this.store.add(data);

        req.onerror = () => reject('Error occured while adding object in current store');

        req.onsuccess = () => {
          resolve(req.result)
        }
      }
    })

  update = (storeName: string, data: any) =>
    new Promise((resolve, reject) => {
      this.newTransaction(storeName)
      const req = this.store.put(data);

      req.onerror = () => reject('Error occured while updating object in current store');

      req.onsuccess = () => {
        resolve(req.result)
      }
    })

  delete = (storeName: string, id: string) =>
    new Promise((resolve, reject) => {
      this.newTransaction(storeName)
      const req = this.store.delete(id)

      req.onerror = () => reject('Error occured while deleting object in current store');

      req.onsuccess = () => resolve(req.result)
    })

  close() {
    this.idbInstance.close()
  };
}
