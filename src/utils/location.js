export async function getCountryFromLatLong(latitude, longitude) {
    const apiKey = "2bb750f5ad164a98b40dfe9d85f83c75";
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        return { currency: data.currency.code, calling_code: data?.calling_code, country: data.country_name }
    } catch (err) {
        console.log(err, "<---------errorr")
    }



}


