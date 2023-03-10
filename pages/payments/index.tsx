import Layout from 'components/Layout';
import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import PaymentsTable from 'components/Payments';

const Payments: NextPage = () => {
  return (
    <Layout className="app-section mx-auto mt-12 flex w-full flex-col items-center space-y-6 pb-8 dark:bg-lp-gray-8">
      <PaymentsTable />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // Pass data to the page via props
  return {
    props: {
      messages: (await import(`translations/${locale}.json`)).default,
    },
  };
};

export default Payments;
