const ViewMoreReleases = () => {

    const url =  "https://www.imdb.com/calendar/?region=gb"

    return (
        <>
            <button>
                <a href={url}>View more upcoming releases</a>
            </button>
        </>
    )

}

export default ViewMoreReleases;