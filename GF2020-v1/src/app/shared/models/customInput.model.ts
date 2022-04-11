

class CustomInputModel {
    constructor( public isPrefix?: boolean, public prefixType?: string, public prefixContent?: string, public isSuffix?: boolean,
        public suffixType?: string, public suffixContent?: string, public isHint?: boolean, public hintText?: string, public isDisabled?: boolean,
        public isRequired?: boolean, public isFloatLabel?: boolean, public placeholder?: string, public defaultValue?: any, public labelPosition?: any, public maxLength?: number) {
            
        this.isPrefix = isPrefix;
        this.prefixType = prefixType;
        this.prefixContent = prefixContent;
        this.isSuffix = isSuffix;
        this.suffixType = suffixType;
        this.suffixContent = suffixContent;
        this.isHint = isHint;
        this.hintText = hintText;
        this.isDisabled = isDisabled;
        this.isRequired = isRequired;
        this.isFloatLabel = isFloatLabel;
        this.placeholder = placeholder;
        this.defaultValue = defaultValue;
        this.labelPosition = labelPosition;
        this.maxLength = maxLength;
    }
}

export default CustomInputModel;

