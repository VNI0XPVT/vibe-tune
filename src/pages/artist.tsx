import React from 'react';
import { Card } from '../components/ui/card';
import { useParams } from 'react-router';

type Props = {};

const ArtistPage = (props: Props) => {
    const { id } = useParams();

    return (
        <div className="space-y-10">
            <Card className="flex flex-col md:flex-row md:justify-start mt-10 gap-5 md:gap-8 md:items-center p-5"></Card>
        </div>
    );
};

export default ArtistPage;
