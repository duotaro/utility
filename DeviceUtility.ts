

export default class DeviceUtility {
    static isTouchDevice():boolean {
        if (window.ontouchstart === null) {
            return true;
        }
        return false;
    }
}