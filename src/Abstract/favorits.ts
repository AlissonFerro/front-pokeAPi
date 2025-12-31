export function getFavorits(): Array<string | null> {
    const favoritsString = localStorage.getItem('favorits');
    if (!favoritsString) {
        localStorage.setItem('favorits', JSON.stringify([]));
        return [];
    }
    const favoritsArray = JSON.parse(favoritsString);
    return favoritsArray;
}

export function addFavorits(item: string): void {
    const favorits = getFavorits();
    if (!favorits.includes(item)) {
        favorits.push(item);
        localStorage.setItem('favorits', JSON.stringify(favorits));
    } else {
        console.log("Item já está nos favoritos.");
    }
}

export function removeToFavorits(item: string): void {
    const favorits = getFavorits();

    const updatedFavorits = favorits.filter((fav) => fav !== item);

    localStorage.setItem('favorits', JSON.stringify(updatedFavorits));
}