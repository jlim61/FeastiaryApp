const Colors = {
  brand: '#96D29E',
  title: '#349140',
  activeTab: '#595959'
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

const FontSizes = {
  regular: 16,
  large: 24,
  title: 48,
};

const FontFamilies = {
  regular: 'Inter',
};

const FontWeights = {
    medium: 500,
    semiBold: 600,
};

const Typography = Object.freeze({
    BrandTitleText: {
        fontSize: 48,
        fontFamily: 'Inter',
        color: Colors.title,
        fontWeight: 600
    },
    BlackLargeText: {
        fontSize: 24,
        fontFamily: 'Inter',
        color: 'black',
        fontWeight: 600
    },
    LargeButtonText: {
        fontSize: 24,
        fontFamily: 'Inter',
        color: 'Black',
        fontWeight: 600
    },
    SmallButtonText: {
        fontSize: 16,
        fontFamily: 'Inter',
        color: 'Black',
        fontWeight: 600
    }
});

const Layout = Object.freeze({
    Column: {
        display: 'flex',
        flexDirection: 'column'
    },
    Row: {
        display: 'flex',
        flexDirection: 'row'
    },
    JustifyContentBetween: {
        justifyContent: 'space-between'
    },
    JustifyContentEven: {
        justifyContent: 'space-evenly'
    },
    JustifyContentCenter: {
        justifyContent: 'center'
    },
    AlignItemsCenter: {
        alignItems: 'center'
    }
});

export { Colors, Spacing, FontSizes, FontFamilies, FontWeights, Typography, Layout };