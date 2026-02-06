# ProofsRangeGenerate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proof** | [**ProofsRangeGenerate200ResponseDataProof**](ProofsRangeGenerate200ResponseDataProof.md) |  | [optional] 
**commitment** | **str** | Pedersen commitment hex | [optional] 
**metadata** | [**ProofsRangeGenerate200ResponseDataMetadata**](ProofsRangeGenerate200ResponseDataMetadata.md) |  | [optional] 

## Example

```python
from sipher_client.models.proofs_range_generate200_response_data import ProofsRangeGenerate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsRangeGenerate200ResponseData from a JSON string
proofs_range_generate200_response_data_instance = ProofsRangeGenerate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ProofsRangeGenerate200ResponseData.to_json())

# convert the object into a dict
proofs_range_generate200_response_data_dict = proofs_range_generate200_response_data_instance.to_dict()
# create an instance of ProofsRangeGenerate200ResponseData from a dict
proofs_range_generate200_response_data_from_dict = ProofsRangeGenerate200ResponseData.from_dict(proofs_range_generate200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


