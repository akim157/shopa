export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(oprions) {
    const { title, btnText, content } = oprions;
    return {
        type: OPEN_MODAL,
        title, btnText, content
    };
}

export function clsoeModal() {
    return {
        type: CLOSE_MODAL
    };
}
