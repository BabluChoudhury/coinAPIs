export const getCrypto = async (name) => {
    try {
        if (!name) {
            return null;
        }
        const getCoin = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
        if (!getCoin.ok) {
            return null;
        }
        const resData= await getCoin.json();
        const Name = resData?.name;
        const Price = resData?.market_data?.current_price?.usd;
        const Market_cap = resData?.market_data?.market_cap?.usd;
        if (Name != undefined &&
            Price != undefined &&
            Market_cap != undefined) {
            return { Name, Price, Market_cap }
        }
        else {
            return null;
        }
    } catch (e) {
        return null
    }
}