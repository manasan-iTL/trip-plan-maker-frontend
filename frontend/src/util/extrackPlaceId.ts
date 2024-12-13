export function extrackPlaceId(placeId: string) {
    const parts = placeId.split("/");
    if (parts.length < 2) {
        return placeId
    }
    return parts[1];
}