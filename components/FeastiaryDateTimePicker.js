import React, { useMemo, useRef, useState } from "react";
import { Platform, View, Pressable } from "react-native";
import { Input, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const FeastiaryDatePicker = ({
  Label,
  Placeholder = "MM/DD/YYYY",
  PlaceholderTextColor,
  LeftIcon,
  RightIcon,
  RightIconColor,
  Value = null,
  OnChange = () => {}, 
  MinimumDate,
  MaximumDate,
  Disabled = false,
  Locale,
  FormatOptions,
  AllowClear = true,
}) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const formatted = useMemo(() => {
    if (!Value) return "";
    const defaults = { year: "numeric", month: "2-digit", day: "2-digit" };
    try {
      return new Intl.DateTimeFormat(Locale, FormatOptions ?? defaults).format(Value);
    } catch {
      return Value.toLocaleDateString?.() ?? Value.toString();
    }
  }, [Value, Locale, FormatOptions]);

  const handleOpen = () => {
    if (Disabled) return;
    setOpen(true);
    inputRef.current?.blur?.();
  };

  const handleConfirm = (date) => {
    setOpen(false);
    if (date) OnChange(date);
  };

  const handleCancel = () => setOpen(false);
  const handleClear = () => OnChange(null);

  const iconColor = RightIconColor ?? PlaceholderTextColor;

  const defaultRightIcon = (
    <Icon
      name="event"
      type="material"
      color={iconColor ?? "#85939E"}
      onPress={handleOpen}
      containerStyle={{ paddingHorizontal: 6 }}
    />
  );

  const clearIcon =
    AllowClear && Value ? (
      <Icon
        name="close"
        type="material"
        onPress={handleClear}
        containerStyle={{ paddingHorizontal: 6 }}
      />
    ) : null;

  return (
    <View>
      <Pressable onPress={handleOpen} disabled={Disabled}>
        <View pointerEvents="none">
          <Input
            ref={inputRef}
            label={Label ? Label : undefined}
            placeholder={Placeholder}
            placeholderTextColor={PlaceholderTextColor}
            leftIcon={LeftIcon ? LeftIcon : undefined}
            rightIcon={
              RightIcon ? (
                RightIcon
              ) : (
                <View style={{ flexDirection: "row" }}>
                  {clearIcon}
                  {defaultRightIcon}
                </View>
              )
            }
            value={formatted}
            editable={false}
            disabled={Disabled}
          />
        </View>
      </Pressable>

      <DateTimePickerModal
        isVisible={open}
        mode="date"
        date={Value ?? new Date()}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        minimumDate={MinimumDate}
        maximumDate={MaximumDate}
        display={Platform.OS === "ios" ? "spinner" : "default"}
      />
    </View>
  );
};

export default FeastiaryDatePicker;
