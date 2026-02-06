# DecryptIncoResultRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** | Computation ID to decrypt | 

## Example

```python
from sipher_client.models.decrypt_inco_result_request import DecryptIncoResultRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptIncoResultRequest from a JSON string
decrypt_inco_result_request_instance = DecryptIncoResultRequest.from_json(json)
# print the JSON string representation of the object
print(DecryptIncoResultRequest.to_json())

# convert the object into a dict
decrypt_inco_result_request_dict = decrypt_inco_result_request_instance.to_dict()
# create an instance of DecryptIncoResultRequest from a dict
decrypt_inco_result_request_from_dict = DecryptIncoResultRequest.from_dict(decrypt_inco_result_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


