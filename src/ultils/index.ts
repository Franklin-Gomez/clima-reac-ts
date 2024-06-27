export const KelvinToCelsius = ( temp : number) : number => { 
    const total = temp - 272.15
    return +total.toFixed(2);
}