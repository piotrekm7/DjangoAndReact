from google.cloud import datastore


class DataStoreClient():
    def __init__(self):
        self.client = datastore.Client()

    def get(self, property_name):
        try:
            key = self.client.key('environment_variables', property_name)
            result = self.client.get(key)
            return result['Value']

        except TypeError:
            print(
                "{} is not a property in Cloud Datastore".format(property_name) +
                "We are creating one for you.  Go to Cloud Datastore to set a value."
            )
            entity = datastore.Entity(key=key)
            entity.update({
                'Value': 'NOT_SET'}
            )
            self.client.put(entity)
