import { setWallpaper, getWallpaper} from "wallpaper";

const currentWallPaper = await getWallpaper()

export async function changewallpaper(path) {
    setWallpaper(path)
}

export function revertChanges() {
    changewallpaper(currentWallPaper)
}
