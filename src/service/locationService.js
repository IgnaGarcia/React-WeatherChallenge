export const fetchLocation = async () => {
    try {
        const res = await fetch(`http://ip-api.com/json`)
        return await res.json()
    } catch (err) {
        console.error(err)
        return null;
    }
};