(() => {
  const __color_utils_numberToHex = function (value) {
    try {
      return __hexFromInt(value)
    } catch (error) {
      return console.debug(`error converting [${value}] to hex`, error),
        "#000000"
    }
  };

  const __tonal_group_tonesToTonalGroup = function (tones) {
    return {
      luminance100: __color_utils_numberToHex(tones.tone(100)),
      luminance99: __color_utils_numberToHex(tones.tone(99)),
      luminance98: __color_utils_numberToHex(tones.tone(98)),
      luminance95: __color_utils_numberToHex(tones.tone(95)),
      luminance90: __color_utils_numberToHex(tones.tone(90)),
      luminance80: __color_utils_numberToHex(tones.tone(80)),
      luminance70: __color_utils_numberToHex(tones.tone(70)),
      luminance60: __color_utils_numberToHex(tones.tone(60)),
      luminance50: __color_utils_numberToHex(tones.tone(50)),
      luminance40: __color_utils_numberToHex(tones.tone(40)),
      luminance35: __color_utils_numberToHex(tones.tone(35)),
      luminance30: __color_utils_numberToHex(tones.tone(30)),
      luminance25: __color_utils_numberToHex(tones.tone(25)),
      luminance20: __color_utils_numberToHex(tones.tone(20)),
      luminance10: __color_utils_numberToHex(tones.tone(10)),
      luminance0: __color_utils_numberToHex(tones.tone(0))
    }
  };

  const __getColorGroup = function (__self, key, tones) {
    var _a;
    const groups = null !== (_a = __self.props.overrides.tonalGroups) && void 0 !== _a ? _a : {}
      , overrideGroup = Object(groups)[key];
    return __flags.is1p && !__self.props.isBaseline || !overrideGroup ? __tonal_group_tonesToTonalGroup(tones) : overrideGroup
  }

  const __tonal_group_convertTonalGroupToMap = function (prefix, group) {
    const map = new Map;
    map.set(`${prefix}-100`, group.luminance100);
    map.set(`${prefix}-99`, group.luminance99);
    map.set(`${prefix}-98`, group.luminance98);
    map.set(`${prefix}-95`, group.luminance95);
    map.set(`${prefix}-90`, group.luminance90);
    map.set(`${prefix}-80`, group.luminance80);
    map.set(`${prefix}-70`, group.luminance70);
    map.set(`${prefix}-60`, group.luminance60);
    map.set(`${prefix}-50`, group.luminance50);
    map.set(`${prefix}-40`, group.luminance40);
    map.set(`${prefix}-35`, group.luminance35);
    map.set(`${prefix}-30`, group.luminance30);
    map.set(`${prefix}-25`, group.luminance25);
    map.set(`${prefix}-20`, group.luminance20);
    map.set(`${prefix}-10`, group.luminance10);
    map.set(`${prefix}-0`, group.luminance0);
    return map
  };

  const __intFromLstar = lstar => {
    const fy = (lstar + 16) / 116
      , kappa = 24389 / 27
      , cubeExceedEpsilon = fy * fy * fy > 216 / 24389;
    var xyz = [(cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * __WHITE_POINT_D65[0], (8 < lstar ? fy * fy * fy : lstar / kappa) * __WHITE_POINT_D65[1], (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * __WHITE_POINT_D65[2]];
    return __intFromXyzComponents(xyz[0], xyz[1], xyz[2])
  };

  const __ThemeAdapterBase = class {
    constructor(props) {
      this.props = props
    }
    get isBaseline() {
      return __checks_isThemeBaseline(this.save())
    }
    get is3p() {
      return this.props.is3p
    }
    get styles() {
      return this.props.is3p ? __BASELINE_3P.styles : __BASELINE_1P.styles
    }
    get imageUrl() {
      return this.props.imageUrl
    }
    get light() {
      var _a, _b, _c;
      const overrides = this.props.isBaseline ? null === (_a = __flags.is1p ? __BASELINE_1P : __BASELINE_3P) || void 0 === _a ? void 0 : _a.light : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.light) && void 0 !== _c ? _c : {};
      var p = this.palettes, __a, __b, __c, __d, __e, __f, __g, __h, __j, __k, __l, __m, __o, __p, __q, __r, __s, __t, __u, __v, __w, __x, __y, __z, __0, __1, __2;
      return {
        primary: null !== (__a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== __a ? __a : p.get("P-40"),
        onPrimary: null !== (__b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== __b ? __b : p.get("P-100"),
        primaryContainer: null !== (__c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== __c ? __c : p.get("P-90"),
        onPrimaryContainer: null !== (__d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== __d ? __d : p.get("P-10"),
        secondary: null !== (__e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== __e ? __e : p.get("S-40"),
        onSecondary: null !== (__f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== __f ? __f : p.get("S-100"),
        secondaryContainer: null !== (__g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== __g ? __g : p.get("S-90"),
        onSecondaryContainer: null !== (__h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== __h ? __h : p.get("S-10"),
        tertiary: null !== (__j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== __j ? __j : p.get("T-40"),
        onTertiary: null !== (__k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== __k ? __k : p.get("T-100"),
        tertiaryContainer: null !== (__l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== __l ? __l : p.get("T-90"),
        onTertiaryContainer: null !== (__m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== __m ? __m : p.get("T-10"),
        error: null !== (__o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== __o ? __o : p.get("E-40"),
        errorContainer: null !== (__p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== __p ? __p : p.get("E-90"),
        onError: null !== (__q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== __q ? __q : p.get("E-100"),
        onErrorContainer: null !== (__r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== __r ? __r : p.get("E-10"),
        background: null !== (__s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== __s ? __s : p.get("N-99"),
        onBackground: null !== (__t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== __t ? __t : p.get("N-10"),
        surface: null !== (__u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== __u ? __u : p.get("N-99"),
        onSurface: null !== (__v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== __v ? __v : p.get("N-10"),
        surfaceVariant: null !== (__w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== __w ? __w : p.get("NV-90"),
        onSurfaceVariant: null !== (__x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== __x ? __x : p.get("NV-30"),
        outline: null !== (__y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== __y ? __y : p.get("NV-50"),
        inverseOnSurface: null !== (__z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== __z ? __z : p.get("N-95"),
        inverseSurface: null !== (__0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== __0 ? __0 : p.get("N-20"),
        inversePrimary: null !== (__1 = null === overrides || void 0 === overrides ? void 0 : overrides.inversePrimary) && void 0 !== __1 ? __1 : p.get("P-80"),
        shadow: null !== (__2 = null === overrides || void 0 === overrides ? void 0 : overrides.shadow) && void 0 !== __2 ? __2 : p.get("N-0")
      }
    }
    get dark() {
      var _a, _b, _c;
      const overrides = this.props.isBaseline ? null === (_a = __flags.is1p ? __BASELINE_1P : __BASELINE_3P) || void 0 === _a ? void 0 : _a.dark : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.dark) && void 0 !== _c ? _c : {};
      var p = this.palettes, __a, __b, __c, __d, __e, __f, __g, __h, __j, __k, __l, __m, __o, __p, __q, __r, __s, __t, __u, __v, __w, __x, __y, __z, __0, __1, __2;
      return {
        primary: null !== (__a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== __a ? __a : p.get("P-80"),
        onPrimary: null !== (__b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== __b ? __b : p.get("P-20"),
        primaryContainer: null !== (__c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== __c ? __c : p.get("P-30"),
        onPrimaryContainer: null !== (__d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== __d ? __d : p.get("P-90"),
        secondary: null !== (__e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== __e ? __e : p.get("S-80"),
        onSecondary: null !== (__f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== __f ? __f : p.get("S-20"),
        secondaryContainer: null !== (__g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== __g ? __g : p.get("S-30"),
        onSecondaryContainer: null !== (__h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== __h ? __h : p.get("S-90"),
        tertiary: null !== (__j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== __j ? __j : p.get("T-80"),
        onTertiary: null !== (__k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== __k ? __k : p.get("T-20"),
        tertiaryContainer: null !== (__l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== __l ? __l : p.get("T-30"),
        onTertiaryContainer: null !== (__m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== __m ? __m : p.get("T-90"),
        error: null !== (__o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== __o ? __o : p.get("E-80"),
        errorContainer: null !== (__p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== __p ? __p : p.get("E-30"),
        onError: null !== (__q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== __q ? __q : p.get("E-20"),
        onErrorContainer: null !== (__r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== __r ? __r : p.get("E-90"),
        background: null !== (__s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== __s ? __s : p.get("N-10"),
        onBackground: null !== (__t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== __t ? __t : p.get("N-90"),
        surface: null !== (__u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== __u ? __u : p.get("N-10"),
        onSurface: null !== (__v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== __v ? __v : p.get("N-90"),
        surfaceVariant: null !== (__w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== __w ? __w : p.get("NV-30"),
        onSurfaceVariant: null !== (__x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== __x ? __x : p.get("NV-80"),
        outline: null !== (__y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== __y ? __y : p.get("NV-60"),
        inverseOnSurface: null !== (__z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== __z ? __z : p.get("N-10"),
        inverseSurface: null !== (__0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== __0 ? __0 : p.get("N-90"),
        inversePrimary: null !== (__1 = null === overrides || void 0 === overrides ? void 0 : overrides.inversePrimary) && void 0 !== __1 ? __1 : p.get("P-40"),
        shadow: null !== (__2 = null === overrides || void 0 === overrides ? void 0 : overrides.shadow) && void 0 !== __2 ? __2 : p.get("N-0")
      }
    }
    get androidLight() {
      var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidLight, __a, __b, __c, __d, __e, __f, __g, __h, __j, __k, __l, __m, __o, __p, __q, __r, __s, __t, __u, __v, __w, __x, __y, __z, __0, __1, __2, __3, __4, __5, __6, __7, __8, __9, __10, __11, __12, __13, __14, __15, __16, __17, __18, __19, __20, __21, __22, __23, __24, __25;
      return {
        colorAccentPrimary: null !== (__b = null !== (__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== __a ? __a : p.get("P-90")) && void 0 !== __b ? __b : __color_utils_numberToHex(key.a1.tone(90)),
        colorAccentPrimaryVariant: null !== (__d = null !== (__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== __c ? __c : p.get("P-40")) && void 0 !== __d ? __d : __color_utils_numberToHex(key.a1.tone(40)),
        colorAccentSecondary: null !== (__f = null !== (__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== __e ? __e : p.get("S-90")) && void 0 !== __f ? __f : __color_utils_numberToHex(key.a2.tone(90)),
        colorAccentSecondaryVariant: null !== (__h = null !== (__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== __g ? __g : p.get("S-40")) && void 0 !== __h ? __h : __color_utils_numberToHex(key.a2.tone(40)),
        colorAccentTertiary: null !== (__k = null !== (__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== __j ? __j : p.get("T-90")) && void 0 !== __k ? __k : __color_utils_numberToHex(key.a3.tone(90)),
        colorAccentTertiaryVariant: null !== (__m = null !== (__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== __l ? __l : p.get("T-40")) && void 0 !== __m ? __m : __color_utils_numberToHex(key.a3.tone(40)),
        textColorPrimary: null !== (__p = null !== (__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== __o ? __o : p.get("N-10")) && void 0 !== __p ? __p : __color_utils_numberToHex(key.n1.tone(10)),
        textColorSecondary: null !== (__r = null !== (__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== __q ? __q : p.get("NV-30")) && void 0 !== __r ? __r : __color_utils_numberToHex(key.n2.tone(30)),
        textColorTertiary: null !== (__t = null !== (__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== __s ? __s : p.get("NV-50")) && void 0 !== __t ? __t : __color_utils_numberToHex(key.n2.tone(50)),
        textColorPrimaryInverse: null !== (__v = null !== (__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== __u ? __u : p.get("N-95")) && void 0 !== __v ? __v : __color_utils_numberToHex(key.n1.tone(95)),
        textColorSecondaryInverse: null !== (__x = null !== (__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== __w ? __w : p.get("N-80")) && void 0 !== __x ? __x : __color_utils_numberToHex(key.n1.tone(80)),
        textColorTertiaryInverse: null !== (__z = null !== (__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== __y ? __y : p.get("N-60")) && void 0 !== __z ? __z : __color_utils_numberToHex(key.n1.tone(60)),
        colorBackground: null !== (__1 = null !== (__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== __0 ? __0 : p.get("N-95")) && void 0 !== __1 ? __1 : __color_utils_numberToHex(key.n1.tone(95)),
        colorBackgroundFloating: null !== (__3 = null !== (__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== __2 ? __2 : p.get("N-98")) && void 0 !== __3 ? __3 : __color_utils_numberToHex(key.n1.tone(98)),
        colorSurface: null !== (__5 = null !== (__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== __4 ? __4 : p.get("N-98")) && void 0 !== __5 ? __5 : __color_utils_numberToHex(key.n1.tone(98)),
        colorSurfaceVariant: null !== (__7 = null !== (__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== __6 ? __6 : p.get("N-90")) && void 0 !== __7 ? __7 : __color_utils_numberToHex(key.n1.tone(90)),
        colorSurfaceHighlight: null !== (__9 = null !== (__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== __8 ? __8 : p.get("N-100")) && void 0 !== __9 ? __9 : __color_utils_numberToHex(key.n1.tone(100)),
        surfaceHeader: null !== (__11 = null !== (__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== __10 ? __10 : p.get("N-90")) && void 0 !== __11 ? __11 : __color_utils_numberToHex(key.n1.tone(90)),
        underSurface: null !== (__13 = null !== (__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== __12 ? __12 : p.get("N-0")) && void 0 !== __13 ? __13 : __color_utils_numberToHex(key.n1.tone(0)),
        offState: null !== (__15 = null !== (__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== __14 ? __14 : p.get("N-20")) && void 0 !== __15 ? __15 : __color_utils_numberToHex(key.n1.tone(20)),
        accentSurface: null !== (__17 = null !== (__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== __16 ? __16 : p.get("NV-95")) && void 0 !== __17 ? __17 : __color_utils_numberToHex(key.a2.tone(95)),
        textPrimaryOnAccent: null !== (__19 = null !== (__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== __18 ? __18 : p.get("N-10")) && void 0 !== __19 ? __19 : __color_utils_numberToHex(key.n1.tone(10)),
        textSecondaryOnAccent: null !== (__21 = null !== (__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== __20 ? __20 : p.get("NV-30")) && void 0 !== __21 ? __21 : __color_utils_numberToHex(key.n2.tone(30)),
        volumeBackground: null !== (__23 = null !== (__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== __22 ? __22 : p.get("N-25")) && void 0 !== __23 ? __23 : __color_utils_numberToHex(key.n1.tone(25)),
        scrim: null !== (__25 = null !== (__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== __24 ? __24 : p.get("N-80")) && void 0 !== __25 ? __25 : __color_utils_numberToHex(key.n1.tone(80))
      }
    }
    get androidDark() {
      var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidDark, __a, __b, __c, __d, __e, __f, __g, __h, __j, __k, __l, __m, __o, __p, __q, __r, __s, __t, __u, __v, __w, __x, __y, __z, __0, __1, __2, __3, __4, __5, __6, __7, __8, __9, __10, __11, __12, __13, __14, __15, __16, __17, __18, __19, __20, __21, __22, __23, __24, __25;
      return {
        colorAccentPrimary: null !== (__b = null !== (__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== __a ? __a : p.get("P-90")) && void 0 !== __b ? __b : __color_utils_numberToHex(key.a1.tone(90)),
        colorAccentPrimaryVariant: null !== (__d = null !== (__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== __c ? __c : p.get("P-70")) && void 0 !== __d ? __d : __color_utils_numberToHex(key.a1.tone(70)),
        colorAccentSecondary: null !== (__f = null !== (__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== __e ? __e : p.get("S-90")) && void 0 !== __f ? __f : __color_utils_numberToHex(key.a2.tone(90)),
        colorAccentSecondaryVariant: null !== (__h = null !== (__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== __g ? __g : p.get("S-70")) && void 0 !== __h ? __h : __color_utils_numberToHex(key.a2.tone(70)),
        colorAccentTertiary: null !== (__k = null !== (__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== __j ? __j : p.get("T-90")) && void 0 !== __k ? __k : __color_utils_numberToHex(key.a3.tone(90)),
        colorAccentTertiaryVariant: null !== (__m = null !== (__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== __l ? __l : p.get("T-70")) && void 0 !== __m ? __m : __color_utils_numberToHex(key.a3.tone(70)),
        textColorPrimary: null !== (__p = null !== (__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== __o ? __o : p.get("N-95")) && void 0 !== __p ? __p : __color_utils_numberToHex(key.n1.tone(95)),
        textColorSecondary: null !== (__r = null !== (__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== __q ? __q : p.get("NV-80")) && void 0 !== __r ? __r : __color_utils_numberToHex(key.n2.tone(80)),
        textColorTertiary: null !== (__t = null !== (__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== __s ? __s : p.get("NV-60")) && void 0 !== __t ? __t : __color_utils_numberToHex(key.n2.tone(60)),
        textColorPrimaryInverse: null !== (__v = null !== (__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== __u ? __u : p.get("N-10")) && void 0 !== __v ? __v : __color_utils_numberToHex(key.n1.tone(10)),
        textColorSecondaryInverse: null !== (__x = null !== (__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== __w ? __w : p.get("N-30")) && void 0 !== __x ? __x : __color_utils_numberToHex(key.n1.tone(30)),
        textColorTertiaryInverse: null !== (__z = null !== (__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== __y ? __y : p.get("N-50")) && void 0 !== __z ? __z : __color_utils_numberToHex(key.n1.tone(50)),
        colorBackground: null !== (__1 = null !== (__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== __0 ? __0 : p.get("N-10")) && void 0 !== __1 ? __1 : __color_utils_numberToHex(key.n1.tone(10)),
        colorBackgroundFloating: null !== (__3 = null !== (__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== __2 ? __2 : p.get("N-10")) && void 0 !== __3 ? __3 : __color_utils_numberToHex(key.n1.tone(10)),
        colorSurface: null !== (__5 = null !== (__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== __4 ? __4 : p.get("N-20")) && void 0 !== __5 ? __5 : __color_utils_numberToHex(key.n1.tone(20)),
        colorSurfaceVariant: null !== (__7 = null !== (__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== __6 ? __6 : p.get("N-30")) && void 0 !== __7 ? __7 : __color_utils_numberToHex(key.n1.tone(30)),
        colorSurfaceHighlight: null !== (__9 = null !== (__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== __8 ? __8 : p.get("N-35")) && void 0 !== __9 ? __9 : __color_utils_numberToHex(key.n1.tone(35)),
        surfaceHeader: null !== (__11 = null !== (__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== __10 ? __10 : p.get("N-30")) && void 0 !== __11 ? __11 : __color_utils_numberToHex(key.n1.tone(30)),
        underSurface: null !== (__13 = null !== (__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== __12 ? __12 : p.get("N-0")) && void 0 !== __13 ? __13 : __color_utils_numberToHex(key.n1.tone(0)),
        offState: null !== (__15 = null !== (__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== __14 ? __14 : p.get("N-20")) && void 0 !== __15 ? __15 : __color_utils_numberToHex(key.n1.tone(20)),
        accentSurface: null !== (__17 = null !== (__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== __16 ? __16 : p.get("NV-95")) && void 0 !== __17 ? __17 : __color_utils_numberToHex(key.a2.tone(95)),
        textPrimaryOnAccent: null !== (__19 = null !== (__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== __18 ? __18 : p.get("N-10")) && void 0 !== __19 ? __19 : __color_utils_numberToHex(key.n1.tone(10)),
        textSecondaryOnAccent: null !== (__21 = null !== (__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== __20 ? __20 : p.get("NV-30")) && void 0 !== __21 ? __21 : __color_utils_numberToHex(key.n2.tone(30)),
        volumeBackground: null !== (__23 = null !== (__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== __22 ? __22 : p.get("N-25")) && void 0 !== __23 ? __23 : __color_utils_numberToHex(key.n1.tone(25)),
        scrim: null !== (__25 = null !== (__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== __24 ? __24 : p.get("N-80")) && void 0 !== __25 ? __25 : __color_utils_numberToHex(key.n1.tone(80))
      }
    }
    get tonalGroups() {
      return Object.assign({
        primary: this.primaryGroup,
        secondary: this.secondaryGroup,
        tertiary: this.tertiaryGroup,
        neutral: this.neutralGroup,
        neutralVariant: this.neutralVariantGroup,
        error: this.errorGroup
      }, this.props.overrides.tonalGroups)
    }
    get primaryGroup() {
      return __getColorGroup(this, "primary", this.props.tones.a1)
    }
    get secondaryGroup() {
      return __getColorGroup(this, "secondary", this.props.tones.a2)
    }
    get tertiaryGroup() {
      return __getColorGroup(this, "tertiary", this.props.tones.a3)
    }
    get neutralGroup() {
      return __getColorGroup(this, "neutral", this.props.tones.n1)
    }
    get neutralVariantGroup() {
      return __getColorGroup(this, "neutralVariant", this.props.tones.n2)
    }
    get errorGroup() {
      return __getColorGroup(this, "error", this.props.tones.error)
    }
    get primary() {
      return __tonal_group_convertTonalGroupToMap("P", this.primaryGroup)
    }
    get secondary() {
      return __tonal_group_convertTonalGroupToMap("S", this.secondaryGroup)
    }
    get tertiary() {
      return __tonal_group_convertTonalGroupToMap("T", this.tertiaryGroup)
    }
    get neutral() {
      return __tonal_group_convertTonalGroupToMap("N", this.neutralGroup)
    }
    get neutralVariant() {
      return __tonal_group_convertTonalGroupToMap("NV", this.neutralVariantGroup)
    }
    get error() {
      return __tonal_group_convertTonalGroupToMap("E", this.errorGroup)
    }
    get palettes() {
      let entries = [];
      entries = entries.concat(Array.from(this.primary.entries()));
      entries = entries.concat(Array.from(this.secondary.entries()));
      entries = entries.concat(Array.from(this.tertiary.entries()));
      entries = entries.concat(Array.from(this.neutral.entries()));
      entries = entries.concat(Array.from(this.neutralVariant.entries()));
      entries = entries.concat(Array.from(this.error.entries()));
      return new Map(entries)
    }
    get seedValue() {
      return this.props.seed
    }
    get source() {
      var _a, _b, _c, _d, _e, _f;
      const p = this.palettes
        , source = this.props.overrides.source;
      return Object.assign(Object.assign({}, source), {
        seed: this.seedValue,
        imageUrl: this.imageUrl,
        primary: null !== (_a = null === source || void 0 === source ? void 0 : source.primary) && void 0 !== _a ? _a : __getPrimaryTonal(this, "P", p),
        secondary: null !== (_b = null === source || void 0 === source ? void 0 : source.secondary) && void 0 !== _b ? _b : __getPrimaryTonal(this, "S", p),
        tertiary: null !== (_c = null === source || void 0 === source ? void 0 : source.tertiary) && void 0 !== _c ? _c : __getPrimaryTonal(this, "T", p),
        neutral: null !== (_d = null === source || void 0 === source ? void 0 : source.neutral) && void 0 !== _d ? _d : __getPrimaryTonal(this, "N", p),
        neutralVariant: null !== (_e = null === source || void 0 === source ? void 0 : source.neutralVariant) && void 0 !== _e ? _e : __getPrimaryTonal(this, "NV", p),
        error: null !== (_f = null === source || void 0 === source ? void 0 : source.error) && void 0 !== _f ? _f : __getPrimaryTonal(this, "E", p)
      })
    }
    get customColors() {
      var _a, _b;
      return [...(null !== (_b = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.customColors) && void 0 !== _b ? _b : [])]
    }
    save() {
      const theme = {
        seed: this.seedValue,
        baseline: this.props.isBaseline,
        imageUrl: this.imageUrl,
        customColors: this.customColors,
        light: this.light,
        dark: this.dark,
        androidLight: __flags.enableAndroid ? this.androidLight : void 0,
        androidDark: __flags.enableAndroid ? this.androidDark : void 0,
        primary: this.primaryGroup,
        secondary: this.secondaryGroup,
        tertiary: this.tertiaryGroup,
        neutral: this.neutralGroup,
        neutralVariant: this.neutralVariantGroup,
        error: this.errorGroup,
        styles: this.styles,
        source: this.source
      };
      console.debug("saved theme", theme);
      return theme
    }
  };

  const __ThemeAdapter = class extends __ThemeAdapterBase { };

  const __TonalPalette = class {
    constructor(hue, chroma) {
      this.hue = hue;
      this.chroma = chroma;
      this.cache = new Map
    }
    tone(tone) {
      let argb = this.cache.get(tone);
      void 0 === argb && (argb = (new __HCT(this.hue, this.chroma, tone)).toInt(),
        this.cache.set(tone, argb));
      return argb
    }
  };

  const __delinearized = rgb => .0031308 >= rgb ? 12.92 * rgb : 1.055 * Math.pow(rgb, 1 / 2.4) - .055;

  const __intFromRgb = rgb => (-16777216 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255) >>> 0;

  const __intFromXyzComponents = (x, y, z) => {
    x /= 100;
    y /= 100;
    z /= 100;
    return __intFromRgb([Math.round(__math_utils_clamp(255, 255 * __delinearized(3.2406 * x + -1.5372 * y + -.4986 * z))), Math.round(__math_utils_clamp(255, 255 * __delinearized(-.9689 * x + 1.8758 * y + .0415 * z))), Math.round(__math_utils_clamp(255, 255 * __delinearized(.0557 * x + -.204 * y + 1.057 * z)))])
  };

  const __fromJchInViewingConditions = function (j, c, h) {
    const hueRadians = h * Math.PI / 180
      , mstar = 1 / .0228 * Math.log(1 + .0228 * c * __DEFAULT.fLRoot);
    return new __CAM16(h, c, j, 4 / __DEFAULT.c * Math.sqrt(j / 100) * (__DEFAULT.aw + 4) * __DEFAULT.fLRoot, 50 * Math.sqrt(c / Math.sqrt(j / 100) * __DEFAULT.c / (__DEFAULT.aw + 4)), (1 + 100 * .007) * j / (1 + .007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians))
  };

  const __viewed = function (__self) {
    const t = Math.pow((0 === __self.chroma || 0 === __self.j ? 0 : __self.chroma / Math.sqrt(__self.j / 100)) / Math.pow(1.64 - Math.pow(.29, __DEFAULT.n), .73), 1 / .9)
      , hRad = __self.hue * Math.PI / 180
      , p2 = __DEFAULT.aw * Math.pow(__self.j / 100, 1 / __DEFAULT.c / __DEFAULT.z) / __DEFAULT.nbb
      , hSin = Math.sin(hRad)
      , hCos = Math.cos(hRad)
      , gamma = 23 * (p2 + .305) * t / (5E4 / 13 * (Math.cos(hRad + 2) + 3.8) * 5.75 * __DEFAULT.nc * __DEFAULT.ncb + 11 * t * hCos + 108 * t * hSin)
      , a = gamma * hCos
      , b = gamma * hSin
      , rA = (460 * p2 + 451 * a + 288 * b) / 1403
      , gA = (460 * p2 - 891 * a - 261 * b) / 1403
      , bA = (460 * p2 - 220 * a - 6300 * b) / 1403
      , rF = 100 / __DEFAULT.fl * __math_utils_signum(rA) * Math.pow(Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA))), 1 / .42) / __DEFAULT.rgbD[0]
      , gF = 100 / __DEFAULT.fl * __math_utils_signum(gA) * Math.pow(Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA))), 1 / .42) / __DEFAULT.rgbD[1]
      , bF = 100 / __DEFAULT.fl * __math_utils_signum(bA) * Math.pow(Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA))), 1 / .42) / __DEFAULT.rgbD[2];
    return __intFromXyzComponents(1.86206786 * rF - 1.01125463 * gF + .14918677 * bF, .38752654 * rF + .62144744 * gF - .00897398 * bF, -.0158415 * rF - .03412294 * gF + 1.04996444 * bF)
  };

  const __math_utils_clamp = function (max, input) {
    return Math.min(Math.max(input, 0), max)
  };

  const __math_utils_sanitizeDegrees = function (degrees) {
    return 0 > degrees ? degrees % 360 + 360 : 360 <= degrees ? degrees % 360 : degrees
  };

  const __hct_getIntInViewingConditions = function (hue__, chroma__, tone__) {
    if (1 > chroma__ || 0 >= Math.round(tone__) || 100 <= Math.round(tone__))
      return __intFromLstar(tone__);
    hue__ = __math_utils_sanitizeDegrees(hue__);
    let high = chroma__
      , mid = chroma__
      , low = 0
      , isFirstLoop = !0
      , answer = null;
    for (; .4 <= Math.abs(low - high);) {
      var hue = hue__
        , chroma = mid
        , tone = tone__;
      let low__ = 0, high__ = 100, mid__, bestdL = 1E3, bestdE = 1E3, bestCam = null;
      for (; .01 < Math.abs(low__ - high__);) {
        mid__ = low__ + (high__ - low__) / 2;
        const clipped = __viewed(__fromJchInViewingConditions(mid__, chroma, hue))
          , clippedLstar = __lstarFromInt(clipped)
          , dL = Math.abs(tone - clippedLstar);
        if (.2 > dL) {
          const camClipped = __fromIntInViewingConditions(clipped)
            , dE = camClipped.distance(__fromJchInViewingConditions(camClipped.j, camClipped.chroma, hue));
          1 >= dE && dE <= bestdE && (bestdL = dL,
            bestdE = dE,
            bestCam = camClipped)
        }
        if (0 === bestdL && 0 === bestdE)
          break;
        clippedLstar < tone ? low__ = mid__ : high__ = mid__
      }
      const possibleAnswer = bestCam;
      if (isFirstLoop) {
        if (null != possibleAnswer)
          return __viewed(possibleAnswer);
        isFirstLoop = !1
      } else
        null === possibleAnswer ? high = mid : (answer = possibleAnswer,
          low = mid);
      mid = low + (high - low) / 2
    }
    return null === answer ? __intFromLstar(tone__) : __viewed(answer)
  };

  const __setInternalState = function (__self, argb) {
    const cam = __fromIntInViewingConditions(argb)
      , tone = __lstarFromInt(argb);
    __self.internalHue = cam.hue;
    __self.internalChroma = cam.chroma;
    __self.internalTone = tone
  };

  const __lstarFromInt = argb => {
    let y = 21.26 * __linearized(((argb & 16711680) >> 16) / 255) + 71.52 * __linearized(((argb & 65280) >> 8) / 255) + 7.22 * __linearized((argb & 255) / 255);
    y /= 100;
    return y <= 216 / 24389 ? 24389 / 27 * y : 116 * Math.pow(y, 1 / 3) - 16
  };

  const __HCT = class {
    constructor(internalHue, internalChroma, internalTone) {
      this.internalHue = internalHue;
      this.internalChroma = internalChroma;
      this.internalTone = internalTone;
      __setInternalState(this, this.toInt())
    }
    toInt() {
      return __hct_getIntInViewingConditions(__math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, __math_utils_clamp(100, this.internalTone))
    }
    get hue() {
      return this.internalHue
    }
    set hue(newHue) {
      __setInternalState(this, __hct_getIntInViewingConditions(__math_utils_sanitizeDegrees(__math_utils_sanitizeDegrees(newHue)), this.internalChroma, __math_utils_clamp(100, this.internalTone)))
    }
    get chroma() {
      return this.internalChroma
    }
    set chroma(newChroma) {
      __setInternalState(this, __hct_getIntInViewingConditions(__math_utils_sanitizeDegrees(this.internalHue), newChroma, __math_utils_clamp(100, this.internalTone)))
    }
    get tone() {
      return this.internalTone
    }
    set tone(newTone) {
      __setInternalState(this, __hct_getIntInViewingConditions(__math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, __math_utils_clamp(100, newTone)))
    }
  };

  const __CAM16 = class {
    constructor(hue, chroma, j, q, s, jstar, astar, bstar) {
      this.hue = hue;
      this.chroma = chroma;
      this.j = j;
      this.q = q;
      this.s = s;
      this.jstar = jstar;
      this.astar = astar;
      this.bstar = bstar
    }
    distance(other) {
      const dJ = this.jstar - other.jstar
        , dA = this.astar - other.astar
        , dB = this.bstar - other.bstar;
      return 1.41 * Math.pow(Math.sqrt(dJ * dJ + dA * dA + dB * dB), .63)
    }
  };

  const __math_utils_signum = function (input) {
    return 0 > input ? -1 : 0 === input ? 0 : 1
  };

  const __ViewingConditions = class {
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
      this.n = n;
      this.aw = aw;
      this.nbb = nbb;
      this.ncb = ncb;
      this.c = c;
      this.nc = nc;
      this.rgbD = rgbD;
      this.fl = fl;
      this.fLRoot = fLRoot;
      this.z = z
    }
  };

  const __WHITE_POINT_D65 = [95.047, 100, 108.883];

  const __DEFAULT = function (whitePoint = __WHITE_POINT_D65, adaptingLuminance = 200 / Math.PI * 100 * Math.pow(66 / 116, 3) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = !1) {
    const rW = .401288 * whitePoint[0] + .650173 * whitePoint[1] + -.051461 * whitePoint[2]
      , gW = -.250268 * whitePoint[0] + 1.204414 * whitePoint[1] + .045854 * whitePoint[2]
      , bW = -.002079 * whitePoint[0] + .048952 * whitePoint[1] + .953127 * whitePoint[2]
      , f = .8 + surround / 10;
    if (.9 <= f) {
      var amount = 10 * (f - .9);
      var _temp = .59 * (1 - amount) + .69 * amount
    } else {
      var amount__ = 10 * (f - .8);
      _temp = .525 * (1 - amount__) + .59 * amount__
    }
    let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d = 1 < d ? 1 : 0 > d ? 0 : d;
    const rgbD = [100 / rW * d + 1 - d, 100 / gW * d + 1 - d, 100 / bW * d + 1 - d]
      , k = 1 / (5 * adaptingLuminance + 1)
      , k4 = k * k * k * k
      , k4F = 1 - k4
      , fl = k4 * adaptingLuminance + .1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance)
      , n = (8 < backgroundLstar ? 100 * Math.pow((backgroundLstar + 16) / 116, 3) : backgroundLstar / (24389 / 27) * 100) / whitePoint[1]
      , nbb = .725 / Math.pow(n, .2)
      , rgbAFactors = [Math.pow(fl * rgbD[0] * rW / 100, .42), Math.pow(fl * rgbD[1] * gW / 100, .42), Math.pow(fl * rgbD[2] * bW / 100, .42)]
      , rgbA = [400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13), 400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13), 400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)];
    return new __ViewingConditions(n, (2 * rgbA[0] + rgbA[1] + .05 * rgbA[2]) * nbb, nbb, nbb, _temp, f, rgbD, fl, Math.pow(fl, .25), 1.48 + Math.sqrt(n))
  }();

  const __linearized = rgb => .04045 >= rgb ? rgb / 12.92 : Math.pow((rgb + .055) / 1.055, 2.4);

  const __fromIntInViewingConditions = function (argb) {
    const redL = 100 * __linearized(((argb & 16711680) >> 16) / 255)
      , greenL = 100 * __linearized(((argb & 65280) >> 8) / 255)
      , blueL = 100 * __linearized((argb & 255) / 255)
      , x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL
      , y = .2126 * redL + .7152 * greenL + .0722 * blueL
      , z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL
      , rD = __DEFAULT.rgbD[0] * (.401288 * x + .650173 * y - .051461 * z)
      , gD = __DEFAULT.rgbD[1] * (-.250268 * x + 1.204414 * y + .045854 * z)
      , bD = __DEFAULT.rgbD[2] * (-.002079 * x + .048952 * y + .953127 * z)
      , rAF = Math.pow(__DEFAULT.fl * Math.abs(rD) / 100, .42)
      , gAF = Math.pow(__DEFAULT.fl * Math.abs(gD) / 100, .42)
      , bAF = Math.pow(__DEFAULT.fl * Math.abs(bD) / 100, .42)
      , rA = 400 * __math_utils_signum(rD) * rAF / (rAF + 27.13)
      , gA = 400 * __math_utils_signum(gD) * gAF / (gAF + 27.13)
      , bA = 400 * __math_utils_signum(bD) * bAF / (bAF + 27.13)
      , a = (11 * rA + -12 * gA + bA) / 11
      , b = (rA + gA - 2 * bA) / 9
      , atanDegrees = 180 * Math.atan2(b, a) / Math.PI
      , hue = 0 > atanDegrees ? atanDegrees + 360 : 360 <= atanDegrees ? atanDegrees - 360 : atanDegrees
      , hueRadians = hue * Math.PI / 180
      , j = 100 * Math.pow((40 * rA + 20 * gA + bA) / 20 * __DEFAULT.nbb / __DEFAULT.aw, __DEFAULT.c * __DEFAULT.z)
      , alpha = Math.pow(5E4 / 13 * .25 * (Math.cos((20.14 > hue ? hue + 360 : hue) * Math.PI / 180 + 2) + 3.8) * __DEFAULT.nc * __DEFAULT.ncb * Math.sqrt(a * a + b * b) / ((20 * rA + 20 * gA + 21 * bA) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, __DEFAULT.n), .73)
      , c = alpha * Math.sqrt(j / 100)
      , mstar = 1 / .0228 * Math.log(1 + .0228 * c * __DEFAULT.fLRoot);
    return new __CAM16(hue, c, j, 4 / __DEFAULT.c * Math.sqrt(j / 100) * (__DEFAULT.aw + 4) * __DEFAULT.fLRoot, 50 * Math.sqrt(alpha * __DEFAULT.c / (__DEFAULT.aw + 4)), (1 + 100 * .007) * j / (1 + .007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians))
  };

  const __fromInt = function (argb) {
    const cam = __fromIntInViewingConditions(argb);
    return new __HCT(cam.hue, cam.chroma, __lstarFromInt(argb))
  };

  const __intFromHex = hex => {
    hex = hex.replace("#", "");
    const isThree = 3 === hex.length
      , isSix = 6 === hex.length
      , isEight = 8 === hex.length;
    if (!isThree && !isSix && !isEight)
      throw Error("unexpected hex " + hex);
    let r = 0
      , g = 0
      , b = 0;
    isThree ? (r = parseInt(hex.slice(0, 1).repeat(2), 16),
      g = parseInt(hex.slice(1, 2).repeat(2), 16),
      b = parseInt(hex.slice(2, 3).repeat(2), 16)) : isSix ? (r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16)) : isEight && (r = parseInt(hex.slice(2, 4), 16),
          g = parseInt(hex.slice(4, 6), 16),
          b = parseInt(hex.slice(6, 8), 16));
    return (-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0
  };

  const __CorePalette = class {
    constructor(argb) {
      const hct = __fromInt(argb)
        , hue = hct.hue;
      this.a1 = new __TonalPalette(hue, Math.max(48, hct.chroma));
      this.a2 = new __TonalPalette(hue, 16);
      this.a3 = new __TonalPalette(hue + 60, 24);
      this.n1 = new __TonalPalette(hue, 4);
      this.n2 = new __TonalPalette(hue, 8);
      this.error = new __TonalPalette(25, 84)
    }
  };

  class __flags_Flags {
    get internal() {
      return !1
    }
    get is3p() {
      return !this.internal
    }
    get is1p() {
      return this.internal
    }
    get enableDsp() {
      return !this.is1p
    }
    get enableAndroid() {
      return this.is1p
    }
    get enableWebExport() {
      return this.is3p
    }
    get enableExtendedColors() {
      return !0
    }
    get enableColorShift() {
      return this.is1p
    }
  };

  const __flags = new __flags_Flags
    , __SHOW_DSP = __flags.enableDsp
    , __SHOW_ANDROID = __flags.enableAndroid
    , __SHOW_WEB_EXPORT = __flags.enableWebExport
    , __ENABLE_EXTENDED_COLOR_SHIFT = __flags.enableColorShift;

  const __fromColor = function (value) {
    var is3p = __flags.is3p;
    console.debug("theme adapter from color");
    const keyTones = new __CorePalette(__intFromHex(value));
    return new __ThemeAdapter({
      tones: keyTones,
      seed: value,
      is3p,
      overrides: {},
      blend: !1,
      isBaseline: !1
    })
  };

  const __hexFromInt = argb => {
    const g = (argb & 65280) >> 8
      , b = argb & 255
      , outParts = [((argb & 16711680) >> 16).toString(16), g.toString(16), b.toString(16)];
    for (const [i__tsickle_destructured_1, part__tsickle_destructured_2] of outParts.entries()) {
      const i = i__tsickle_destructured_1
        , part = part__tsickle_destructured_2;
      1 === part.length && (outParts[i] = "0" + part)
    }
    return "#" + outParts.join("")
  };

  const __filter = function (colorsToExcitedProportion, colorsToCam) {
    const filtered = [];
    for (const [color__tsickle_destructured_8, cam__tsickle_destructured_9] of colorsToCam.entries()) {
      const color = color__tsickle_destructured_8
        , cam = cam__tsickle_destructured_9
        , proportion = colorsToExcitedProportion.get(color);
      15 <= cam.chroma && 10 <= __lstarFromInt(color) && .01 <= proportion && filtered.push(color)
    }
    return filtered
  };

  const __score = function (colorsToPopulation) {
    let populationSum = 0;
    for (const population of colorsToPopulation.values())
      populationSum += population;
    const colorsToProportion = new Map
      , colorsToCam = new Map
      , hueProportions = Array(360).fill(0);
    for (const [color__tsickle_destructured_1, population__tsickle_destructured_2] of colorsToPopulation.entries()) {
      const color = color__tsickle_destructured_1
        , proportion = population__tsickle_destructured_2 / populationSum;
      colorsToProportion.set(color, proportion);
      const cam = __fromIntInViewingConditions(color);
      colorsToCam.set(color, cam);
      hueProportions[Math.round(cam.hue)] += proportion
    }
    const colorsToExcitedProportion = new Map;
    for (const [color__tsickle_destructured_3, cam__tsickle_destructured_4] of colorsToCam.entries()) {
      const color = color__tsickle_destructured_3
        , hue = Math.round(cam__tsickle_destructured_4.hue);
      let excitedProportion = 0;
      for (let i = hue - 15; i < hue + 15; i++)
        excitedProportion += hueProportions[__math_utils_sanitizeDegrees(i)];
      colorsToExcitedProportion.set(color, excitedProportion)
    }
    const colorsToScore = new Map;
    for (const [color__tsickle_destructured_5, cam__tsickle_destructured_6] of colorsToCam.entries()) {
      const color = color__tsickle_destructured_5
        , cam = cam__tsickle_destructured_6
        , proportionScore = 70 * colorsToExcitedProportion.get(color);
      colorsToScore.set(color, proportionScore + (cam.chroma - 48) * (48 > cam.chroma ? .1 : .3))
    }
    const filteredColors = __filter(colorsToExcitedProportion, colorsToCam)
      , dedupedColorsToScore = new Map;
    for (const color of filteredColors) {
      let duplicateHue = !1;
      const hue = colorsToCam.get(color).hue;
      for (const [alreadyChosenColor__tsickle_destructured_7] of dedupedColorsToScore) {
        const alreadyChosenHue = colorsToCam.get(alreadyChosenColor__tsickle_destructured_7).hue;
        if (15 > 180 - Math.abs(Math.abs(hue - alreadyChosenHue) - 180)) {
          duplicateHue = !0;
          break
        }
      }
      duplicateHue || dedupedColorsToScore.set(color, colorsToScore.get(color))
    }
    const colorsByScoreDescending = Array.from(dedupedColorsToScore.entries());
    colorsByScoreDescending.sort((first, second) => second[1] - first[1]);
    const answer = colorsByScoreDescending.map(entry => entry[0]);
    0 === answer.length && answer.push(4282549748);
    return answer
  };

  class __quantizer_wsmeans_DistanceAndIndex {
    constructor() {
      this.index = this.distance = -1
    }
  };

  const __labFromInt = argb => {
    const e = 216 / 24389
      , kappa = 24389 / 27
      , redL = 100 * __linearized(((argb & 16711680) >> 16) / 255)
      , greenL = 100 * __linearized(((argb & 65280) >> 8) / 255)
      , blueL = 100 * __linearized((argb & 255) / 255)
      , yNormalized = (.2126 * redL + .7152 * greenL + .0722 * blueL) / __WHITE_POINT_D65[1];
    let fy;
    fy = yNormalized > e ? Math.pow(yNormalized, 1 / 3) : (kappa * yNormalized + 16) / 116;
    const xNormalized = (.41233895 * redL + .35762064 * greenL + .18051042 * blueL) / __WHITE_POINT_D65[0]
      , zNormalized = (.01932141 * redL + .11916382 * greenL + .95034478 * blueL) / __WHITE_POINT_D65[2];
    return [116 * fy - 16, 500 * ((xNormalized > e ? Math.pow(xNormalized, 1 / 3) : (kappa * xNormalized + 16) / 116) - fy), 200 * (fy - (zNormalized > e ? Math.pow(zNormalized, 1 / 3) : (kappa * zNormalized + 16) / 116))]
  };

  const __LabPointProvider = class {
    toInt(point) {
      var l = point[0];
      const e = 216 / 24389
        , kappa = 24389 / 27
        , fy = (l + 16) / 116
        , fx = point[1] / 500 + fy
        , fz = fy - point[2] / 200
        , fx3 = fx * fx * fx
        , fz3 = fz * fz * fz;
      var xyz = [(fx3 > e ? fx3 : (116 * fx - 16) / kappa) * __WHITE_POINT_D65[0], (8 < l ? fy * fy * fy : l / kappa) * __WHITE_POINT_D65[1], (fz3 > e ? fz3 : (116 * fz - 16) / kappa) * __WHITE_POINT_D65[2]];
      return __intFromXyzComponents(xyz[0], xyz[1], xyz[2])
    }
    distance(from, to) {
      const dL = from[0] - to[0]
        , dA = from[1] - to[1]
        , dB = from[2] - to[2];
      return dL * dL + dA * dA + dB * dB
    }
  };

  class __quantizer_wu_CreateBoxesResult {
    constructor(resultCount) {
      this.resultCount = resultCount
    }
  };

  const __variance = function (__self, cube) {
    const dr = __self.volume(cube, __self.momentsR)
      , dg = __self.volume(cube, __self.momentsG)
      , db = __self.volume(cube, __self.momentsB)
      , xx = __self.moments[__getIndex(cube.r1, cube.g1, cube.b1)] - __self.moments[__getIndex(cube.r1, cube.g1, cube.b0)] - __self.moments[__getIndex(cube.r1, cube.g0, cube.b1)] + __self.moments[__getIndex(cube.r1, cube.g0, cube.b0)] - __self.moments[__getIndex(cube.r0, cube.g1, cube.b1)] + __self.moments[__getIndex(cube.r0, cube.g1, cube.b0)] + __self.moments[__getIndex(cube.r0, cube.g0, cube.b1)] - __self.moments[__getIndex(cube.r0, cube.g0, cube.b0)]
      , hypotenuse = dr * dr + dg * dg + db * db
      , volume = __self.volume(cube, __self.weights);
    return xx - hypotenuse / volume
  };

  class __quantizer_wu_MaximizeResult {
    constructor(cutLocation, maximum) {
      this.cutLocation = cutLocation;
      this.maximum = maximum
    }
  };

  const __maximize = function (__self, cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
    const bottomR = __self.bottom(cube, direction, __self.momentsR)
      , bottomG = __self.bottom(cube, direction, __self.momentsG)
      , bottomB = __self.bottom(cube, direction, __self.momentsB)
      , bottomW = __self.bottom(cube, direction, __self.weights);
    let max = 0, cut = -1, halfR, halfG, halfB, halfW;
    for (let i = first; i < last; i++) {
      halfR = bottomR + __self.top(cube, direction, i, __self.momentsR);
      halfG = bottomG + __self.top(cube, direction, i, __self.momentsG);
      halfB = bottomB + __self.top(cube, direction, i, __self.momentsB);
      halfW = bottomW + __self.top(cube, direction, i, __self.weights);
      if (0 === halfW)
        continue;
      let tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB
        , tempDenominator = 1 * halfW
        , temp = tempNumerator / tempDenominator;
      halfR = wholeR - halfR;
      halfG = wholeG - halfG;
      halfB = wholeB - halfB;
      halfW = wholeW - halfW;
      0 !== halfW && (tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB,
        tempDenominator = 1 * halfW,
        temp += tempNumerator / tempDenominator,
        temp > max && (max = temp,
          cut = i))
    }
    return new __quantizer_wu_MaximizeResult(cut, max)
  };

  const __cut = function (__self, one, two) {
    const wholeR = __self.volume(one, __self.momentsR)
      , wholeG = __self.volume(one, __self.momentsG)
      , wholeB = __self.volume(one, __self.momentsB)
      , wholeW = __self.volume(one, __self.weights)
      , maxRResult = __maximize(__self, one, "red", one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW)
      , maxGResult = __maximize(__self, one, "green", one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW)
      , maxBResult = __maximize(__self, one, "blue", one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
    let direction;
    const maxR = maxRResult.maximum
      , maxG = maxGResult.maximum
      , maxB = maxBResult.maximum;
    if (maxR >= maxG && maxR >= maxB) {
      if (0 > maxRResult.cutLocation)
        return !1;
      direction = "red"
    } else
      direction = maxG >= maxR && maxG >= maxB ? "green" : "blue";
    two.r1 = one.r1;
    two.g1 = one.g1;
    two.b1 = one.b1;
    switch (direction) {
      case "red":
        one.r1 = maxRResult.cutLocation;
        two.r0 = one.r1;
        two.g0 = one.g0;
        two.b0 = one.b0;
        break;
      case "green":
        one.g1 = maxGResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g1;
        two.b0 = one.b0;
        break;
      case "blue":
        one.b1 = maxBResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g0;
        two.b0 = one.b1;
        break;
      default:
        throw Error("unexpected direction " + direction);
    }
    one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
    two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
    return !0
  };

  class __quantizer_wu_Box {
    constructor() {
      this.vol = this.b1 = this.b0 = this.g1 = this.g0 = this.r1 = this.r0 = 0
    }
  };

  const __createBoxes = function (__self) {
    __self.cubes = Array.from({
      length: 256
    }).fill(0).map(() => new __quantizer_wu_Box);
    const volumeVariance = Array.from({
      length: 256
    }).fill(0);
    __self.cubes[0].r0 = 0;
    __self.cubes[0].g0 = 0;
    __self.cubes[0].b0 = 0;
    __self.cubes[0].r1 = 32;
    __self.cubes[0].g1 = 32;
    __self.cubes[0].b1 = 32;
    let generatedColorCount = 256
      , next = 0;
    for (let i = 1; 256 > i; i++) {
      __cut(__self, __self.cubes[next], __self.cubes[i]) ? (volumeVariance[next] = 1 < __self.cubes[next].vol ? __variance(__self, __self.cubes[next]) : 0,
        volumeVariance[i] = 1 < __self.cubes[i].vol ? __variance(__self, __self.cubes[i]) : 0) : (volumeVariance[next] = 0,
          i--);
      next = 0;
      let temp = volumeVariance[0];
      for (let j = 1; j <= i; j++)
        volumeVariance[j] > temp && (temp = volumeVariance[j],
          next = j);
      if (0 >= temp) {
        generatedColorCount = i + 1;
        break
      }
    }
    return new __quantizer_wu_CreateBoxesResult(generatedColorCount)
  };

  const __getIndex = function (r, g, b) {
    return (r << 10) + (r << 6) + r + (g << 5) + g + b
  };

  const __QuantizerWu = class {
    constructor() {
      this.weights = [];
      this.momentsR = [];
      this.momentsG = [];
      this.momentsB = [];
      this.moments = [];
      this.cubes = []
    }
    volume(cube, moment) {
      return moment[__getIndex(cube.r1, cube.g1, cube.b1)] - moment[__getIndex(cube.r1, cube.g1, cube.b0)] - moment[__getIndex(cube.r1, cube.g0, cube.b1)] + moment[__getIndex(cube.r1, cube.g0, cube.b0)] - moment[__getIndex(cube.r0, cube.g1, cube.b1)] + moment[__getIndex(cube.r0, cube.g1, cube.b0)] + moment[__getIndex(cube.r0, cube.g0, cube.b1)] - moment[__getIndex(cube.r0, cube.g0, cube.b0)]
    }
    bottom(cube, direction, moment) {
      switch (direction) {
        case "red":
          return -moment[__getIndex(cube.r0, cube.g1, cube.b1)] + moment[__getIndex(cube.r0, cube.g1, cube.b0)] + moment[__getIndex(cube.r0, cube.g0, cube.b1)] - moment[__getIndex(cube.r0, cube.g0, cube.b0)];
        case "green":
          return -moment[__getIndex(cube.r1, cube.g0, cube.b1)] + moment[__getIndex(cube.r1, cube.g0, cube.b0)] + moment[__getIndex(cube.r0, cube.g0, cube.b1)] - moment[__getIndex(cube.r0, cube.g0, cube.b0)];
        case "blue":
          return -moment[__getIndex(cube.r1, cube.g1, cube.b0)] + moment[__getIndex(cube.r1, cube.g0, cube.b0)] + moment[__getIndex(cube.r0, cube.g1, cube.b0)] - moment[__getIndex(cube.r0, cube.g0, cube.b0)];
        default:
          throw Error("unexpected direction $direction");
      }
    }
    top(cube, direction, position, moment) {
      switch (direction) {
        case "red":
          return moment[__getIndex(position, cube.g1, cube.b1)] - moment[__getIndex(position, cube.g1, cube.b0)] - moment[__getIndex(position, cube.g0, cube.b1)] + moment[__getIndex(position, cube.g0, cube.b0)];
        case "green":
          return moment[__getIndex(cube.r1, position, cube.b1)] - moment[__getIndex(cube.r1, position, cube.b0)] - moment[__getIndex(cube.r0, position, cube.b1)] + moment[__getIndex(cube.r0, position, cube.b0)];
        case "blue":
          return moment[__getIndex(cube.r1, cube.g1, position)] - moment[__getIndex(cube.r1, cube.g0, position)] - moment[__getIndex(cube.r0, cube.g1, position)] + moment[__getIndex(cube.r0, cube.g0, position)];
        default:
          throw Error("unexpected direction $direction");
      }
    }
  };

  const __index_unwrapSafeUrl = function (url) {
    if (url instanceof __SafeUrl)
      if (url instanceof __safe_url_impl_SafeUrlImpl)
        var _temp = url.privateDoNotAccessOrElseWrappedUrl;
      else
        throw Error("Unexpected type when unwrapping SafeUrl");
    else
      _temp = __unwrap(url);
    return _temp
  };

  const __secretToken = {};
  const __SafeUrl = class { };

  class __safe_url_impl_SafeUrlImpl extends __SafeUrl {
    constructor(url) {
      super();
      if (__secretToken !== __secretToken)
        throw Error("Bad secret");
      this.privateDoNotAccessOrElseWrappedUrl = url
    }
    toString() {
      return this.privateDoNotAccessOrElseWrappedUrl
    }
  };

  const __safe_url_builders_fromBlob = function (blob) {
    const match = blob.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (2 !== (null === match || void 0 === match ? void 0 : match.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(match[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(match[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(match[1])))
      throw Error(`unsafe blob MIME type: ${blob.type}`);
    return new __safe_url_impl_SafeUrlImpl(URL.createObjectURL(blob))
  };

  const __image_utils_decodeToImageData = async function (bytes) {
    const url = __safe_url_builders_fromBlob(new Blob([bytes], {
      type: "image/png"
    }))
      , image = await new Promise((resolve, reject) => {
        const img = new Image;
        img.onload = () => {
          resolve(img)
        }
          ;
        img.onerror = () => {
          reject()
        }
          ;
        img.src = __index_unwrapSafeUrl(url)
      }
      )
      , ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = 112;
    ctx.canvas.height = 112;
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
    return ctx.getImageData(0, 0, image.width, image.height)
  };

  const __image_utils_bufferToPixels = async function (buffer) {
    const imageBytes = new Uint8Array(buffer)
      , imageData = await __image_utils_decodeToImageData(imageBytes)
      , pixels = [];
    for (let i = 0; i < imageData.data.length; i += 4)
      255 > imageData.data[i + 3] || pixels.push(__intFromRgb([imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]]));
    return pixels
  };

  const __index_seedFromImage = async function (image) {
    const imageBuffer = "string" === typeof image ? await (await fetch(image)).arrayBuffer() : image;
    var pixels = await __image_utils_bufferToPixels(imageBuffer), __self = new __QuantizerWu, __a;
    __self.weights = Array.from({
      length: 35937
    }).fill(0);
    __self.momentsR = Array.from({
      length: 35937
    }).fill(0);
    __self.momentsG = Array.from({
      length: 35937
    }).fill(0);
    __self.momentsB = Array.from({
      length: 35937
    }).fill(0);
    __self.moments = Array.from({
      length: 35937
    }).fill(0);
    var __a__;
    const countByColor = new Map;
    for (let i = 0; i < pixels.length; i++) {
      const pixel = pixels[i];
      255 > (pixel & 4278190080) >> 24 >>> 0 || countByColor.set(pixel, (null !== (__a__ = countByColor.get(pixel)) && void 0 !== __a__ ? __a__ : 0) + 1)
    }
    for (const [pixel__tsickle_destructured_1, count__tsickle_destructured_2] of countByColor.entries()) {
      const pixel = pixel__tsickle_destructured_1
        , count = count__tsickle_destructured_2
        , red = (pixel & 16711680) >> 16
        , green = (pixel & 65280) >> 8
        , blue = pixel & 255
        , index = __getIndex((red >> 3) + 1, (green >> 3) + 1, (blue >> 3) + 1);
      __self.weights[index] = (null !== (__a = __self.weights[index]) && void 0 !== __a ? __a : 0) + count;
      __self.momentsR[index] += count * red;
      __self.momentsG[index] += count * green;
      __self.momentsB[index] += count * blue;
      __self.moments[index] += count * (red * red + green * green + blue * blue)
    }
    for (let r = 1; 33 > r; r++) {
      const area = Array.from({
        length: 33
      }).fill(0)
        , areaR = Array.from({
          length: 33
        }).fill(0)
        , areaG = Array.from({
          length: 33
        }).fill(0)
        , areaB = Array.from({
          length: 33
        }).fill(0)
        , area2 = Array.from({
          length: 33
        }).fill(0);
      for (let g = 1; 33 > g; g++) {
        let line = 0
          , lineR = 0
          , lineG = 0
          , lineB = 0
          , line2 = 0;
        for (let b = 1; 33 > b; b++) {
          const index = __getIndex(r, g, b);
          line += __self.weights[index];
          lineR += __self.momentsR[index];
          lineG += __self.momentsG[index];
          lineB += __self.momentsB[index];
          line2 += __self.moments[index];
          area[b] += line;
          areaR[b] += lineR;
          areaG[b] += lineG;
          areaB[b] += lineB;
          area2[b] += line2;
          const previousIndex = __getIndex(r - 1, g, b);
          __self.weights[index] = __self.weights[previousIndex] + area[b];
          __self.momentsR[index] = __self.momentsR[previousIndex] + areaR[b];
          __self.momentsG[index] = __self.momentsG[previousIndex] + areaG[b];
          __self.momentsB[index] = __self.momentsB[previousIndex] + areaB[b];
          __self.moments[index] = __self.moments[previousIndex] + area2[b]
        }
      }
    }
    var colorCount = __createBoxes(__self).resultCount;
    const colors = [];
    for (let i = 0; i < colorCount; ++i) {
      const cube = __self.cubes[i]
        , weight = __self.volume(cube, __self.weights);
      if (0 < weight) {
        const r = Math.round(__self.volume(cube, __self.momentsR) / weight)
          , g = Math.round(__self.volume(cube, __self.momentsG) / weight)
          , b = Math.round(__self.volume(cube, __self.momentsB) / weight);
        colors.push(-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255)
      }
    }
    const pixelToCount = new Map
      , points = []
      , pixels__ = []
      , pointProvider = new __LabPointProvider;
    let pointCount = 0;
    for (let i = 0; i < pixels.length; i++) {
      const inputPixel = pixels[i]
        , pixelCount = pixelToCount.get(inputPixel);
      void 0 === pixelCount ? (pointCount++,
        points.push(__labFromInt(inputPixel)),
        pixels__.push(inputPixel),
        pixelToCount.set(inputPixel, 1)) : pixelToCount.set(inputPixel, pixelCount + 1)
    }
    const counts = [];
    for (let i = 0; i < pointCount; i++) {
      const count = pixelToCount.get(pixels__[i]);
      void 0 !== count && (counts[i] = count)
    }
    let clusterCount = Math.min(256, pointCount);
    0 < colors.length && (clusterCount = Math.min(clusterCount, colors.length));
    const clusters = [];
    for (let i = 0; i < colors.length; i++)
      clusters.push(__labFromInt(colors[i]));
    const additionalClustersNeeded = clusterCount - clusters.length;
    if (0 === colors.length && 0 < additionalClustersNeeded)
      for (let i = 0; i < additionalClustersNeeded; i++)
        clusters.push([100 * Math.random(), 201 * Math.random() + -100, 201 * Math.random() + -100]);
    const clusterIndices = [];
    for (let i = 0; i < pointCount; i++)
      clusterIndices.push(Math.floor(Math.random() * clusterCount));
    const indexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
      indexMatrix.push([]);
      for (let j = 0; j < clusterCount; j++)
        indexMatrix[i].push(0)
    }
    const distanceToIndexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
      distanceToIndexMatrix.push([]);
      for (let j = 0; j < clusterCount; j++)
        distanceToIndexMatrix[i].push(new __quantizer_wsmeans_DistanceAndIndex)
    }
    const pixelCountSums = [];
    for (let i = 0; i < clusterCount; i++)
      pixelCountSums.push(0);
    for (let iteration = 0; 10 > iteration; iteration++) {
      for (let i = 0; i < clusterCount; i++) {
        for (let j = i + 1; j < clusterCount; j++) {
          const distance = pointProvider.distance(clusters[i], clusters[j]);
          distanceToIndexMatrix[j][i].distance = distance;
          distanceToIndexMatrix[j][i].index = i;
          distanceToIndexMatrix[i][j].distance = distance;
          distanceToIndexMatrix[i][j].index = j
        }
        distanceToIndexMatrix[i].sort();
        for (let j = 0; j < clusterCount; j++)
          indexMatrix[i][j] = distanceToIndexMatrix[i][j].index
      }
      let pointsMoved = 0;
      for (let i = 0; i < pointCount; i++) {
        const point = points[i]
          , previousClusterIndex = clusterIndices[i]
          , previousDistance = pointProvider.distance(point, clusters[previousClusterIndex]);
        let minimumDistance = previousDistance
          , newClusterIndex = -1;
        for (let j = 0; j < clusterCount; j++) {
          if (distanceToIndexMatrix[previousClusterIndex][j].distance >= 4 * previousDistance)
            continue;
          const distance = pointProvider.distance(point, clusters[j]);
          distance < minimumDistance && (minimumDistance = distance,
            newClusterIndex = j)
        }
        -1 !== newClusterIndex && 3 < Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)) && (pointsMoved++,
          clusterIndices[i] = newClusterIndex)
      }
      if (0 === pointsMoved && 0 !== iteration)
        break;
      const componentASums = Array(clusterCount).fill(0)
        , componentBSums = Array(clusterCount).fill(0)
        , componentCSums = Array(clusterCount).fill(0);
      for (let i = 0; i < clusterCount; i++)
        pixelCountSums[i] = 0;
      for (let i = 0; i < pointCount; i++) {
        const clusterIndex = clusterIndices[i]
          , point = points[i]
          , count = counts[i];
        pixelCountSums[clusterIndex] += count;
        componentASums[clusterIndex] += point[0] * count;
        componentBSums[clusterIndex] += point[1] * count;
        componentCSums[clusterIndex] += point[2] * count
      }
      for (let i = 0; i < clusterCount; i++) {
        const count = pixelCountSums[i];
        clusters[i] = 0 === count ? [0, 0, 0] : [componentASums[i] / count, componentBSums[i] / count, componentCSums[i] / count]
      }
    }
    const argbToPopulation = new Map;
    for (let i = 0; i < clusterCount; i++) {
      const count = pixelCountSums[i];
      if (0 === count)
        continue;
      const possibleNewCluster = pointProvider.toInt(clusters[i]);
      argbToPopulation.has(possibleNewCluster) || argbToPopulation.set(possibleNewCluster, count)
    }
    const ranked = __score(argbToPopulation);
    return __hexFromInt(ranked[0])
  };

  const __materialDynamicColors = async function (param) {
      if (/\#[a-fA-F0-9]{6}/.test(param))
      return __fromColor(param);

    let image = param;
    
    if (param instanceof Blob || param instanceof File)
      image = URL.createObjectURL(param);

    if (param.target && param.target.files[0])
      image = URL.createObjectURL(param.target.files[0]);

    let color = await __index_seedFromImage(image);
    return __fromColor(color);
  };

  window.materialDynamicColors = __materialDynamicColors;
})();