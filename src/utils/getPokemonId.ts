export default function getPokemonId(url: string): number {
    const segments = url.split('/');
    return parseInt(segments[segments.length - 2]);
}
