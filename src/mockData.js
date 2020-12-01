const movieData = {
  movies: [
    {
      id: 694919,
      poster_path:
        "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.666666666666667,
      release_date: "2020-09-29",
    },
    {
      id: 337401,
      poster_path:
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      title: "Mulan",
      average_rating: 4.909090909090909,
      release_date: "2020-09-04",
    },
    {
      id: 718444,
      poster_path:
        "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
      title: "Rogue",
      average_rating: 5.428571428571429,
      release_date: "2020-08-20",
    },
    {
      id: 539885,
      poster_path:
        "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      title: "Ava",
      average_rating: 5.111111111111111,
      release_date: "2020-07-02",
    },
    {
      id: 581392,
      poster_path:
        "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
      title: "Peninsula",
      average_rating: 7,
      release_date: "2020-07-15",
    },
    {
      id: 726739,
      poster_path:
        "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
      title: "Cats & Dogs 3: Paws Unite",
      average_rating: 7.4,
      release_date: "2020-10-02",
    },
    {
      id: 627290,
      poster_path:
        "https://image.tmdb.org/t/p/original//irkse1FMm9dWemwlxKJ7RINT9Iy.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//pGqBDYycGWsMYc57sYv5M9GAQoW.jpg",
      title: "Antebellum",
      average_rating: 6.375,
      release_date: "2020-09-02",
    },
    {
      id: 613504,
      poster_path:
        "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
      title: "After We Collided",
      average_rating: 5.25,
      release_date: "2020-09-02",
    },
    {
      id: 659986,
      poster_path:
        "https://image.tmdb.org/t/p/original//gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
      title: "The Owners",
      average_rating: 5.285714285714286,
      release_date: "2020-09-04",
    },
    {
      id: 632618,
      poster_path:
        "https://image.tmdb.org/t/p/original//sDi6wKgECUjDug2gn4uODSqZ3yC.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",
      title: "The Crimes That Bind",
      average_rating: 4.857142857142857,
      release_date: "2020-08-20",
    },
    {
      id: 446893,
      poster_path:
        "https://image.tmdb.org/t/p/original//7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
      title: "Trolls World Tour",
      average_rating: 5.5,
      release_date: "2020-03-12",
    },
    {
      id: 508439,
      poster_path:
        "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      title: "Onward",
      average_rating: 6.4,
      release_date: "2020-02-29",
    },
    {
      id: 479259,
      poster_path:
        "https://image.tmdb.org/t/p/original//vQgXwuJrlpzGDI8169tRQRy71Nv.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//wUP0KIAXcRevjjJpoSKT7LLhiaK.jpg",
      title: "Lost Girls & Love Hotels",
      average_rating: 3.857142857142857,
      release_date: "2020-09-18",
    },
    {
      id: 592350,
      poster_path:
        "https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//9guoVF7zayiiUq5ulKQpt375VIy.jpg",
      title: "My Hero Academia: Heroes Rising",
      average_rating: 5,
      release_date: "2019-12-20",
    },
    {
      id: 531876,
      poster_path:
        "https://image.tmdb.org/t/p/original//hPkqY2EMqWUnFEoedukilIUieVG.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
      title: "The Outpost",
      average_rating: 3.8333333333333335,
      release_date: "2020-06-24",
    },
    {
      id: 499932,
      poster_path:
        "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//rUeqBuNDR9zN6vZV9kpEFMtQm0E.jpg",
      title: "The Devil All the Time",
      average_rating: 4.666666666666667,
      release_date: "2020-09-11",
    },
    {
      id: 413518,
      poster_path:
        "https://image.tmdb.org/t/p/original//4w1ItwCJCTtSi9nPfJC1vU6NIVg.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
      title: "Pinocchio",
      average_rating: 4.75,
      release_date: "2019-12-19",
    },
    {
      id: 577922,
      poster_path:
        "https://image.tmdb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
      title: "Tenet",
      average_rating: 5.5,
      release_date: "2020-08-22",
    },
    {
      id: 619592,
      poster_path:
        "https://image.tmdb.org/t/p/original//ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//eIqyISB5j99OSRZUuvdN9g2bBsS.jpg",
      title: "Force of Nature",
      average_rating: 4.4,
      release_date: "2020-07-02",
    },
    {
      id: 501979,
      poster_path:
        "https://image.tmdb.org/t/p/original//4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
      title: "Bill & Ted Face the Music",
      average_rating: 5,
      release_date: "2020-08-27",
    },
    {
      id: 340102,
      poster_path:
        "https://image.tmdb.org/t/p/original//xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
      title: "The New Mutants",
      average_rating: 4.2,
      release_date: "2020-08-26",
    },
  ],
};


export default movieData;