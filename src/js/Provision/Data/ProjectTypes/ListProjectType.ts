export default class ListProjectType {
    public Title: string;
    public TemplateLookup: string;
    public ExtensionsLookup: string;
    public ListContentsLookup: string;

    /**
     * Constructor
     *
     * @param {any} item SharePoint list item
     * @param {string} fieldPrefix Prefix for fields
     */
    constructor(item, fieldPrefix: string) {
        this.Title = item[`Title`];
        this.TemplateLookup = item[`${fieldPrefix}TemplateLookup`];
        this.ExtensionsLookup = item[`${fieldPrefix}ExtensionsLookup`];
        this.ListContentsLookup = item[`${fieldPrefix}ListContentsLookup`];
    }
}