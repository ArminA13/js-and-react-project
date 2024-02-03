class DataFetcher {
    constructor() {
        
    }

    static getInstace() {
        if (!DataFetcher.instance) {
            DataFetcher.instance = new DataFetcher();
        }
        return DataFetcher.instance;
    }

    
}


const dataFetcher = DataFetcher.getInstace();

