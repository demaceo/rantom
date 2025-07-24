export const mockMovies = {
  movies: [
    {
      id: 1,
      title: "The Matrix",
      poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
      release_date: "1999-03-31",
      overview: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      average_rating: 8.7,
      genres: ["Action", "Science Fiction"],
      budget: 63000000,
      revenue: 467222824,
      runtime: 136,
      tagline: "Free your mind"
    },
    {
      id: 2,
      title: "Inception",
      poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      release_date: "2010-07-16",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      average_rating: 8.8,
      genres: ["Action", "Science Fiction", "Adventure"],
      budget: 160000000,
      revenue: 836848942,
      runtime: 148,
      tagline: "Your mind is the scene of the crime"
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
      release_date: "2008-07-18",
      overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
      average_rating: 9.0,
      genres: ["Drama", "Action", "Crime", "Thriller"],
      budget: 185000000,
      revenue: 1004558444,
      runtime: 152,
      tagline: "Why so serious?"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
      release_date: "1994-10-14",
      overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
      average_rating: 8.9,
      genres: ["Thriller", "Crime"],
      budget: 8000000,
      revenue: 214179088,
      runtime: 154,
      tagline: "Just because you are a character doesn't mean you have character."
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      release_date: "1994-09-23",
      overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
      average_rating: 9.3,
      genres: ["Drama"],
      budget: 25000000,
      revenue: 16000000,
      runtime: 142,
      tagline: "Fear can hold you prisoner. Hope can set you free."
    },
    {
      id: 6,
      title: "Forrest Gump",
      poster_path: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "1994-07-06",
      overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events.",
      average_rating: 8.8,
      genres: ["Comedy", "Drama", "Romance"],
      budget: 55000000,
      revenue: 677387716,
      runtime: 142,
      tagline: "Life is like a box of chocolates."
    }
  ]
};

export const getMockMovie = (id) => {
  const movie = mockMovies.movies.find(movie => movie.id === id);
  return { movie };
};
