export const ITEMS_COUNT = 50;

export type Provider = 'countries' | 'wiki' | undefined;

export const Providers = {
    countries: 'https://restcountries.eu/rest/v2/lang/en',
    wiki: `https://commons.wikimedia.org/w/api.php?action=query&list=allimages&ailimit=${ITEMS_COUNT}&format=json&origin=*`
};

export const PROVIDER_FIELDS = {
    countries: ['name', 'region', 'capital', 'population'],
    wiki: ['name', 'title', 'url']
};

