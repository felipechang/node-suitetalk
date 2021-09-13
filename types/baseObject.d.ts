export = BaseObject;
declare class BaseObject {
    _type: any;
    _name: any;
    _getSoapType(): string;
    /**
     * Attributes added to the SOAP node
     */
    _getAttributes(): void;
    /**
     * Get SOAP node tree to be passed onto node-soap
     * @return {object}
     */
    getNode(): object;
}
