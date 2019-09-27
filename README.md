Create a single page web application (SPA) that will help us to save our favorites from different platforms (Wikipedia, Spotify, IMDB, Countries, BestBuy...).
In order to achieve that, we’ll have 2 pages (routes): Provider (wiki, spotify...) and Favorites that will show the collected favorites from all providers.
Provider page needs to include up to 50 results from the chosen provider (the user should be able to choose the provider to search with), display the results in a table and add a checkbox besides every row that will be used to add an item to the favorites.
Favorites page needs to include a list of the favorites from the providers in a table.

Extra:
    • Use material design
    • The table should have sorting capabilities (could be only for the name/title).
    • The columns can vary according to the content of the provider (artist name, song title for Spotify or movie title and actor names for IMDB for example).
    • A comment can be added next to each favorite chosen and should be saved as well.
Guidelines:
    1. Use at least 2 3rd party APIs from the list of APIs.
    2. Use of state is a must (Angular - NgRx / React - Redux)
    3. Use Bitbucket or Github to store your source code (optional).
List of optional APIs (any API that provides list of items is fine):
    1. Wikipedia.
    2. IMDB.
    3. BestBuy.
    4. Spotify.
    5. Favorite Countries.