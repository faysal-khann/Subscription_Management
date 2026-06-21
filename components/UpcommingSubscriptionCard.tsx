import React from "react";
import { Image, Text, View } from "react-native";

const UpcommingSubscriptionCard = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft <= 0
              ? "Due today"
              : daysLeft === 1
                ? "1 day left"
                : `${daysLeft} days left`}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name">{name}</Text>
    </View>
  );
};

export default UpcommingSubscriptionCard;
