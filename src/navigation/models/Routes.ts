type ScreensWithoutParams = "More" | "Watch" | "Dashboard" | "Library";

interface ScreensWithParams {}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<
  K extends Routes | undefined = undefined
> = K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = { [K in Routes]: RouteParam<K> };
export type RoutesRecord = Record<Routes, RouteParams>;
