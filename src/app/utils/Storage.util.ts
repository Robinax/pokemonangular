export class StorageUtil{
//Saves the user in sessionstorage
public static storageSave<T>(key:string,value: T): void{
    sessionStorage.setItem(key, JSON.stringify(value))
}

//reading the sessionstorage
public static storageRead<T>(key:string): T | undefined{
    const storedValue = sessionStorage.getItem(key)
    try{
    if (storedValue) {
        return JSON.parse(storedValue) as T;
    }
        return undefined;
    
}
catch(e){
    sessionStorage.removeItem(key);
    return undefined;
}
}

}
