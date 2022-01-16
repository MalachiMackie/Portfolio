export enum ProjectCategory {
    WebDev,
    GameDev,
    BackendDev,
    DesktopDev
}

export function GetProjectCategoryName(category: ProjectCategory): string {
    category = +category
    switch (category) {
        case ProjectCategory.BackendDev: return 'Backend Development';
        case ProjectCategory.GameDev: return 'Game Development';
        case ProjectCategory.WebDev: return 'Web Development';
        case ProjectCategory.DesktopDev: return 'Desktop Development'
        default: return ''
    }
}