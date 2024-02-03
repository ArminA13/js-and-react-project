class DataFetcher {


    static getInstace() {
        if (!DataFetcher.instance) {
            DataFetcher.instance = new DataFetcher();
        }
        return DataFetcher.instance;
    }

    _groupData(data, key) {
        const groupedData = {};

        data.forEach(item => {
            const groupKey = item[key];
            if (!groupedData[groupKey]) {
                groupedData[groupKey] = [];
            }
            groupedData[groupKey].push(item);
        });

        return groupedData;
    }

    _fetchData(apiURL, key)  {
        return fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                return response.json();
            })
            .then(data => {
                return this._groupData(data, key);
            })
            .catch(error => {
                throw error;
            });
    }

    getGroupedData(key) {
        return this._fetchData("https://jsonplaceholder.typicode.com/posts", key);
    }
}

const dataFetcher = DataFetcher.getInstace();
dataFetcher.getGroupedData("id").then(groupedData => console.log(groupedData));


