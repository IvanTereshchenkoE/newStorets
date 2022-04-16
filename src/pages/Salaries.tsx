import Layout from "../components/Layout/Layout";
import ChartPieCompany from "../components/Salaries/ChartPieCompany";
import ChartSalary from "../components/Salaries/ChartSalary";
import ChartVacancy from "../components/Salaries/ChartVacancy";

function Salaries() {
  return (
    <>
      <Layout>
        <ChartSalary></ChartSalary>
        <ChartVacancy></ChartVacancy>
        <ChartPieCompany></ChartPieCompany>
      </Layout>
    </>
  );
}

export default Salaries;
