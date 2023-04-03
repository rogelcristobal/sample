import React from "react";

const App = () => {
  const [input, setInput] = React.useState("");
 
const links = [
  `https://www.digidirect.com.au/catalogsearch/result/?q=${input}`,
`https://www.jbhifi.com.au/search?page=1&query=${input}`,
`https://www.harveynorman.com.au/catalogsearch/result/?q=${input}`,
`https://www.thegoodguys.com.au/SearchDisplay?categoryId=&storeId=900&catalogId=30000&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&orderBy=0&pageSize=30&searchTerm=${input}`,
`https://www.binglee.com.au/search?q=https://www.amazon.com.au/s?k=${input}`,
`https://www.amazon.com.au/s?k=${input}`,
`https://www.camerahouse.com.au/catalogsearch/result/?q=${input}`,
`https://www.georges.com.au/collections/shop?q=${input}`,
`https://www.digitalcamerawarehouse.com.au/?rf=kw&kdigitalcamerawarehouse.com.au/?rf=kw&kw=${input}`,
`https://www.camerapro.com.au/catalogsearch/result/?q=${input}`,
`https://www.sony.com.au/search?search=${input}`,
`https://www.videopro.com.au/search/?q=${input}`,
`https://www.teds.com.au/catalogsearch/result/?q=${input}`,
`https://www.ryda.com.au/nsearch/?q=${input}`,
`https://www.camera-warehouse.com.au/catalogsearch/result/?q=${input}`,
]

  const handleSubmit = () => {
   links.forEach((link) => window.open(link, '_blank'));
  };

  return (
      <div className="bg-sky-500 h-screen">
        <div className="container h-full mx-auto flex items-center justify-center">
          <div
            className="h-fit w-[30rem] drop-shadow-2xl flex-shrink-0 bg-[#ffffff]  rounded-lg p-4 flex items-start justify-center gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-12 bg-gray-100 rounded-lg px-4 w-full focus:outline-blue-500"
            />
            <button
              onClick={handleSubmit}
              aria-label="button"
              className="h-12 w-32 bg-green-500 text-white rounded-lg font-sans text-lg capitalize"
            >
              search
            </button>
          </div>
        </div>
      </div>
  );
};

export default App;
