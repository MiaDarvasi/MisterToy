import { Chart } from "../cmps/Chart.jsx"


export function Dashboard() {
    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <div className="pie-chart">
            <Chart />
            </div>
        </section>
    )
}