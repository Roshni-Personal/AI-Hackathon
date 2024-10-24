import {
  Star,
  People,
  SentimentSatisfied,
  ShoppingCart,
  ThumbUp,
  TrendingUp,
  AccessTime,
  LocalOffer,
  Update,
  Insights,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const fieldIcons = {
  averageRating: <Star />,
  reviewCount: <People />,
  sentiment: <SentimentSatisfied />,
  quantitySufficiency: <ShoppingCart />,
  recommendation: <ThumbUp />,
  seasonalTrends: <TrendingUp />,
  timeSinceRelease: <AccessTime />,
  promotionsImpact: <LocalOffer />,
  reviewFreshness: <Update />,
  qualityTrend: <Insights />,
};

const AnalyticsCard = ({ title, value, icon }) => (
  <Card
    sx={{
      display: "flex",
      alignItems: "center",
      padding: 2,
      boxShadow: 2,
      borderRadius: 2,
    }}
  >
    <Avatar sx={{ bgcolor: "#1976d2", marginRight: 2 }}>{icon}</Avatar>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const AnalyticsCards = ({ analyticsData }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Average Rating"
            value={analyticsData.averageRating}
            icon={fieldIcons.averageRating}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Review Count"
            value={analyticsData.reviewCount}
            icon={fieldIcons.reviewCount}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Sentiment"
            value={analyticsData.sentiment}
            icon={fieldIcons.sentiment}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Quantity Sufficiency"
            value={analyticsData.quantitySufficiency}
            icon={fieldIcons.quantitySufficiency}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Recommendation"
            value={analyticsData.recommendation}
            icon={fieldIcons.recommendation}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Seasonal Trends"
            value={analyticsData.seasonalTrends}
            icon={fieldIcons.seasonalTrends}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Time Since Release"
            value={analyticsData.timeSinceRelease}
            icon={fieldIcons.timeSinceRelease}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Promotions Impact"
            value={analyticsData.promotionsImpact}
            icon={fieldIcons.promotionsImpact}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Review Freshness"
            value={analyticsData.reviewFreshness}
            icon={fieldIcons.reviewFreshness}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsCard
            title="Quality Trend"
            value={analyticsData.qualityTrend}
            icon={fieldIcons.qualityTrend}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsCards;
