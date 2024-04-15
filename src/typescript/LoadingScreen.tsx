import Grid from "@mui/material/Grid/Grid"
import Skeleton from "@mui/material/Skeleton/Skeleton"

export default function LoadingScreen()
{
    return (<Grid
        container
        sx={{ position: "relative", mt: 10, }}
        spacing={1} direction={"row"}>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
        </Grid>
    </Grid>)
}