import FilmRelease from './FilmRelease'

const FilmReleasesList = ({filmReleases}) => {

    const filmReleaseNodes = filmReleases.map(filmRelease => {
        return(
            <FilmRelease url={filmRelease.url} key={filmRelease.id}>{filmRelease.name}</FilmRelease>
        )
    })

    return(
        <>
            {filmReleaseNodes}
        </>
    )
}

export default FilmReleasesList;